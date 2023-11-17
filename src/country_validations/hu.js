const { testStringAgainstRegex } = require("../utils");

const validateVatHU = (vat) => {
  const vatPattern = /^HU\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatHU,
};
