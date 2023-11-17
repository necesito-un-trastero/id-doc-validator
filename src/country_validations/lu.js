const { testStringAgainstRegex } = require("../utils");

const validateVatLU = (vat) => {
  const vatPattern = /^(LU)(\d{8})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatLU,
};
