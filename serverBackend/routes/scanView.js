'use strict';

const { Router } = require('express');
const router = Router();

// latest products shown at root
const { displayScanResults } = require('../controllers/scanCtrl');

// home screen
router.get('/scanView', displayScanResults);

module.exports = router;
