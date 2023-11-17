const { testStringAgainstRegex } = require("../utils");

const validateVatCZ = (vat) => {
  const vatPattern = /^CZ\d{8,10}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  // TODO: validate the check digit
  return true;
};

module.exports = {
  validateVatCZ,
};
