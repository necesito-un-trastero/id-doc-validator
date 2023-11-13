const { testStringAgainstRegex } = require("../utils");

const validatePassportEE = (passport) => {
  const passportPattern = /^[A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatEE = (vat) => {
  const vatPattern = /^EE\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportEE,
  validateVatEE,
};
