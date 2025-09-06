// models/playerModel.js
const mongoose = require("mongoose");
const { validatePlayer } = require("../helper/playerHelper");

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
    },
    playerCountry: {
      type: String,
      required: [true, "Player country is required"],
    },
    isStarting: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

playerSchema.pre("save", async function (next) {
  try {
    const Player = this.constructor;
    const existingPlayers = await Player.find();

    validatePlayer(this, existingPlayers);

    next();
  } catch (error) {
    next(new Error(error.message));
  }
});

const playerModel = mongoose.model("Lanre Fc", playerSchema);

module.exports = playerModel;
