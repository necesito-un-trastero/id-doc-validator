const { testStringAgainstRegex } = require("../utils");

const validateVatIE = (vat) => {
  const vatPattern = /^(IE)\d[0-9A-Z]\d{5}[A-Z]{1,2}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatIE,
};
