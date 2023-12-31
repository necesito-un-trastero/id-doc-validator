const { testStringAgainstRegex } = require("../utils");

const validateVatLV = (vat) => {
  const vatPattern = /^(LV)\d{11}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatLV,
};
