const { testStringAgainstRegex } = require("../utils");

const validateVatCO = (vat) => {
  const vatPattern = /^CO\d{9}[A-Z]$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatCO,
};
