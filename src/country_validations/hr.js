const { testStringAgainstRegex } = require("../utils");

const validatePassportHR = (passport) => {
  const passportPattern = /^\d{9}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatHR = (vat) => {
  const vatPattern = /^HR\d{11}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: validate the check digit
  return true;
};

module.exports = {
  validatePassportHR,
  validateVatHR,
};
