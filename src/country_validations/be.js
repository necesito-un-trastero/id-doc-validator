const { testStringAgainstRegex } = require("../utils");

const validateVatBE = (vat) => {
  const vatPattern = /^BE0[1-9][- .]?\d{4}[- .]?\d{4}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: add validation of check digits
  return true;
};

module.exports = {
  validateVatBE,
};
