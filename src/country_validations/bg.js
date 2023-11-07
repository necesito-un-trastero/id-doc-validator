const { testStringAgainstRegex } = require("../utils");

const validatePassportBG = (passport) => {
  const passportPattern = /^\d{9}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatBG = (vat) => {
  const vatPattern = /^BG\d{9,10}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: add check digit validation
  return true;
};

module.exports = {
  validatePassportBG,
  validateVatBG,
};
