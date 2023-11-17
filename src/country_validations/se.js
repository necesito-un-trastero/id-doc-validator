const { testStringAgainstRegex } = require("../utils");

const validateVatSE = (vat) => {
  const vatPattern = /^(SE)\d{12}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatSE,
};
