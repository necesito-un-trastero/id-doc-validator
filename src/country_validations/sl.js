const { testStringAgainstRegex } = require("../utils");

const validateVatSL = (vat) => {
  const vatPattern = /^(SI)(\d{8})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  // TODO: Validate check digit

  return true;
};

module.exports = {
  validateVatSL,
};
