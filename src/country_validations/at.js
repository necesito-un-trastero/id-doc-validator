const { testStringAgainstRegex } = require("../utils");

const validatePassportAT = (passport) => {
  const passportPattern = /^[A-Z]\s?\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatAT = (vat) => {
  const vatPattern = /^ATU\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportAT,
  validateVatAT,
};
