const { testStringAgainstRegex } = require("../utils");

const validateVatEE = (vat) => {
  const vatPattern = /^EE\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatEE,
};
