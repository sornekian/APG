const express = require('express');
const router = express.Router();
const newsCtrl = require('../../controllers/api/news');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, newsCtrl.index);


module.exports = router;