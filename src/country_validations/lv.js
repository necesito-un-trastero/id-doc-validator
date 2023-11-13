const { testStringAgainstRegex } = require("../utils");

const validatePassportLV = (passport) => {
  const passportPattern = /^[0-9A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatLV = (vat) => {
  const vatPattern = /^(LV)\d{11}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validatePassportLV,
  validateVatLV,
};
