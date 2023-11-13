const { testStringAgainstRegex } = require("../utils");

const validatePassportDK = (passport) => {
  const passportPattern = /^\d{9}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatDK = (vat) => {
  const vatPattern = /^DK\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportDK,
  validateVatDK,
};
