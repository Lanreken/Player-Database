const express = require("express");
const { createPlayer, getOnePlayer, getAllPlayers, getPlayersByPosition, getPlayersByWing } = require("../controller/playerController");

const router = express.Router();

router.post("/player", createPlayer);
router.get("/player/:id", getOnePlayer);
router.get("/players", getAllPlayers);
router.get("/player/position/:position", getPlayersByPosition);
router.get("/players/wing/:wing", getPlayersByWing);

module.exports = router;
