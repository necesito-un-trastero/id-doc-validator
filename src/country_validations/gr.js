const { testStringAgainstRegex } = require("../utils");

const validatePassportGR = (passport) => {
  const passportPattern = /^[A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatGR = (vat) => {
  const vatPattern = /^EL\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportGR,
  validateVatGR,
};
