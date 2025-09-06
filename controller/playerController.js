const playerModel = require("../models/playerModels");

exports.createPlayer = async (req, res) => {
  try {
    const { playerName, playerAge, playerPosition, playerNumber, playerCountry, isStarting } = req.body;

    const newPlayer = new playerModel({
      playerName,
      playerAge,
      playerPosition,
      playerNumber,
      playerCountry,
      isStarting,
    });
    console.log(newPlayer);

    await newPlayer.save();

    res.status(201).json({
      message: "Player created successfully",
      player: newPlayer,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOnePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const getOnePlayer = await playerModel.findById(id);
    if (!getOnePlayer) {
      return res.status(404).json({
        message: "Player not found",
      });
    }
    res.status(200).json({
      player: getOnePlayer,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await playerModel.find();
    res.status(200).json({
      players,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPlayersByPosition = async (req, res) => {
  try {
    const playerPosition = req.params.position.toUpperCase();

    const players = await playerModel.find({ playerPosition });

    if (!players || players.length === 0) {
      return res.status(404).json({
        message: `No players found for position ${playerPosition}`,
      });
    }

    res.status(200).json({
      message: `Players playing as ${playerPosition}`,
      data: players,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getPlayersByWing = async (req, res) => {
  try {
    const wingGroups = {
      left: ["LB", "LWB", "LW", "LM", "LWF"],
      right: ["RB", "RWB", "RW", "RM", "RWF"],
      center: ["CB", "CDM", "CM", "CAM", "CF", "ST", "DM", "AM"],
      gk: ["GK"],
    };

    const wing = req.params.wing.toLowerCase();

    if (!wingGroups[wing]) {
      return res.status(400).json({
        message: "Invalid wing. Use left, right, center, or gk.",
      });
    }

    const players = await playerModel.find({ playerPosition: { $in: wingGroups[wing] } });

    if (!players || players.length === 0) {
      return res.status(404).json({
        message: `No players found for ${wing} wing`,
      });
    }

    res.status(200).json({
      message: `Players on the ${wing} wing`,
      data: players,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
