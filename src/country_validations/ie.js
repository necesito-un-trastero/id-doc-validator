const { testStringAgainstRegex } = require("../utils");

const validatePassportIE = (passport) => {
  const passportPattern = /^[PL][A-Z]\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatIE = (vat) => {
  const vatPattern = /^(IE)\d[0-9A-Z]\d{5}[A-Z]{1,2}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportIE,
  validateVatIE,
};
