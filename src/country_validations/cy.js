const { testStringAgainstRegex } = require("../utils");

const validateVatCY = (vat) => {
  const vatPattern = /^CY\d{8}[A-Z]$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatCY,
};
