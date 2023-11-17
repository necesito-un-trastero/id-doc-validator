const { testStringAgainstRegex } = require("../utils");

const validateVatMT = (vat) => {
  const vatPattern = /^(MT)(\d{8})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatMT,
};
