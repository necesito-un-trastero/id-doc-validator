const { testStringAgainstRegex } = require("../utils");

const validatePassportCZ = (passport) => {
  const passportPattern = /^\d{8}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatCZ = (vat) => {
  const vatPattern = /^CZ\d{8,10}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  // TODO: validate the check digit
  return true;
};

module.exports = {
  validatePassportCZ,
  validateVatCZ,
};
