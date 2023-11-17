const { testStringAgainstRegex } = require("../utils");

const validateVatDK = (vat) => {
  const vatPattern = /^DK\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatDK,
};
