'use strict';

const { Router } = require('express');
const router = Router();

// latest products shown at root
const { displayHome } = require('../controllers/scanCtrl');

// home screen
router.get('/', displayHome);

module.exports = router;
