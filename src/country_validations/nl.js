const { testStringAgainstRegex } = require("../utils");

const validateVatNL = (vat) => {
  const vatPattern = /^(NL)(\d{9}B\d{2})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatNL,
};
