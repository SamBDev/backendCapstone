'use strict';

const { Router } = require('express');
const router = Router();

// latest products shown at root
const { pingLocal } = require('../controllers/nmapCtrl');

router.get('/', pingLocal);

module.exports = router;
