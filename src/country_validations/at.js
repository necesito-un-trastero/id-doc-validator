const { testStringAgainstRegex } = require("../utils");

const validateVatAT = (vat) => {
  const vatPattern = /^ATU\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatAT,
};
