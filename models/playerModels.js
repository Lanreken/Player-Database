// models/playerModel.js
const mongoose = require("mongoose");
const {positionNumberRules} = require("../helper/playerHelper")

const playerSchema = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: [true, "Player name is required"],
      trim: true,
    },
    playerAge: {
      type: Number,
      required: [true, "Player age is required"],
      min: [16, "Player must be at least 16 years old"],
      max: [45, "Player age must not exceed 45"],
    },
    playerPosition: {
      type: String,
      enum: ["GK", "CB", "LB", "RB", "DM", "CM", "AM", "LW", "RW", "ST"],
      required: [true, "Position is required"],
    },
    playerNumber: {
      type: Number,
      required: [true, "Player number is required"],
      validate: {
        validator: async function (value) {
          const Player = this.constructor;
          const existingPlayers = await Player.find({
            _id: { $ne: this._id },
          });

          const validNumbers = await positionNumberRules()[this.playerPosition];
          if (!validNumbers || !validNumbers.includes(value)) {
            return false;
          }

          // Check if number is already taken by another player
          if (existingPlayers.some((p) => p.playerNumber === value)) {
            return false;
          }

          return true;
        },
        message:
          "Invalid player number: Number is not valid for the position or is already taken.",
      },
    },
    playerCountry: {
      type: String,
      required: [true, "Player country is required"],
    },
    isStarting: {
      type: Boolean,
      default: false,
      // You can add a validator for isStarting here
      validate: {
        validator: async function (value) {
          if (value) {
            const Player = this.constructor;
            const starterCount = await Player.countDocuments({
              isStarting: true,
            });
            return starterCount < 11;
          }
          return true;
        },
        message: "Cannot have more than 11 starters.",
      },
    },
  },
  { timestamps: true }
);

const playerModel = mongoose.model("Lanre Fc", playerSchema);

module.exports = playerModel;