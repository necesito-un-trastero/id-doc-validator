const { testStringAgainstRegex } = require("../utils");

const validateVatPL = (vat) => {
  const vatPattern = /^(PL)(\d{10})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: Validate check digit

  return true;
};

module.exports = {
  validateVatPL,
};
