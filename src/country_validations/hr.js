const { testStringAgainstRegex } = require("../utils");

const validateVatHR = (vat) => {
  const vatPattern = /^HR\d{11}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: validate the check digit
  return true;
};

module.exports = {
  validateVatHR,
};
