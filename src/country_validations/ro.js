const { testStringAgainstRegex } = require("../utils");

const validateVatRO = (vat) => {
  const vatPattern = /^(RO)(\d{2,10})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatRO,
};
