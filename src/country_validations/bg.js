const { testStringAgainstRegex } = require("../utils");

const validateVatBG = (vat) => {
  const vatPattern = /^BG\d{9,10}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: add check digit validation
  return true;
};

module.exports = {
  validateVatBG,
};
