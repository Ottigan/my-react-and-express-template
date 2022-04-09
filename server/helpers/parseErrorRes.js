function parseErrorRes(res, err, defaultMessage) {
  const msg = err.name === 'CustomError' ? err.message : defaultMessage;

  return res.t(msg);
}

module.exports = parseErrorRes;
