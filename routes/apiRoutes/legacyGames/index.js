// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();

const { response } = require("express");
const Legacy = require("../../../models/LegacyGame");
// functions from the LegacyGamesController
const { getAllLegacyGames, getOneLegacyGame, updateLegacyGame, deleteLegacyGame, addLegacyGame } = require('./../../../controllers/legacyGamesController');

// route reached here: "/api/legacygames/"
router.get("/", getAllLegacyGames);

router.route("/")
  .get(getAllLegacyGames)
  .post(addLegacyGame)

// route reached here: "/api/legacygames/:id"
router.route("/:id")
  .get(getOneLegacyGame)
  .put(updateLegacyGame)
  .delete(deleteLegacyGame)

module.exports = router;