const express = require('express');
const router = express.Router();

const musicController = require('../controllers/musicController.js');
const artistController = require('../controllers/artistController.js');

router.post('/music', musicController.getMusicById);
router.post('/artist', artistController.getArtistByid);


module.exports = router;