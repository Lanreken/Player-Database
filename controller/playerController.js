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

exports.getPlayerByPosition = async (req, res) => {
  try {
    const { playerPosition } = req.params;
    const players = await playerModel.find({ playerPosition: playerPosition.toUpperCase() });
    res.status(200).json({
      players,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
