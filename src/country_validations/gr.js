const { testStringAgainstRegex } = require("../utils");

const validateVatGR = (vat) => {
  const vatPattern = /^EL\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatGR,
};
