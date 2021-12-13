const express = require('express');
const parseErrorRes = require('../helpers/parseErrorRes');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send({
      data: { sampleResponse: 'Test server response!' },
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
