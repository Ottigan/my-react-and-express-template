const express = require('express');
const parseErrorRes = require('../helpers/parseErrorRes');
const TestsService = require('../services/TestsService');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await TestsService.get();

    res.send({
      data,
      status: 'success',
      message: 'Test server response!',
    });
  } catch (err) {
    const message = parseErrorRes(res, err, 'Default errror...');

    res.send({
      status: 'error',
      message,
    });
  }
});

module.exports = router;
