const { testStringAgainstRegex } = require("../utils");

const validateVatLT = (vat) => {
  const vatPattern = /^(LT)(\d{9}|\d{12})$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatLT,
};
