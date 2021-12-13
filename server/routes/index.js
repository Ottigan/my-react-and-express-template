const express = require('express');
const tests = require('./tests');

const router = express.Router();

router.use('/', tests);

module.exports = router;
