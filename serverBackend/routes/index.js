'use strict';

const { Router } = require('express');
const router = Router();

// latest products shown at root
const { displayHome, saveScanResults } = require('../controllers/scanCtrl');

// home screen
router.get('/', displayHome);
router.post('/', saveScanResults);

// // Scan View
// router.use(require('./scanView'));

module.exports = router;
