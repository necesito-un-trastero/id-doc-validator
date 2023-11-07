const { testStringAgainstRegex } = require("../utils");

const validatePassportBE = (passport) => {
  const passportPattern = /^[A-Z]{2}[0-9]{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatBE = (vat) => {
  const vatPattern = /^BE0[1-9][- .]?\d{4}[- .]?\d{4}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  //TODO: add validation of check digits
  return true;
};

module.exports = {
  validatePassportBE,
  validateVatBE,
};
