const express = require("express")
const { createPlayer, getOnePlayer, getAllPlayers, getPlayerByPosition } = require("../controller/playerController")

const router = express.Router()

router.post("/player", createPlayer)
router.get("/player/:id", getOnePlayer)
router.get("/players", getAllPlayers)
router.get("/player/:playerPosition", getPlayerByPosition)

module.exports = router