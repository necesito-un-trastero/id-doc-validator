const { testStringAgainstRegex } = require("../utils");

const validatePassportHU = (passport) => {
  const passportPattern = /^[A-Z]{2}\d{6,7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatHU = (vat) => {
  const vatPattern = /^HU\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportHU,
  validateVatHU,
};
