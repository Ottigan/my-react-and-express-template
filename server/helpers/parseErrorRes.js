function parseErrorRes(res, err, defaultMessage) {
  const msg = err.name === 'CustomError' ? err.message : defaultMessage;
  const { i18nParams } = err;

  if (i18nParams) {
    return res.t(msg, ...i18nParams);
  }

  return res.t(msg);
}

module.exports = parseErrorRes;
