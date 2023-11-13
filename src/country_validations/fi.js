const { testStringAgainstRegex } = require("../utils");

const validatePassportFI = (passport) => {
  const passportPattern = /^[A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatFI = (vat) => {
  const vatPattern = /^FI\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  if (!validateWeightedChecksum(vat)) return false;

  return true;
};

const validateWeightedChecksum = (vat) => {
  const vatWithoutCountryCode = vat.slice(2);
  const vatWithoutChecksum = vatWithoutCountryCode.slice(0, -1);
  const providedChecksum = Number(vatWithoutCountryCode.slice(-1));

  const weights = [7, 3, 1, 7, 3, 1, 7];

  const digits = vatWithoutChecksum.split("").reverse().map(Number);

  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * weights[index];
  }, 0);

  const expectedChecksum = (10 - (sum % 10)) % 10;

  return providedChecksum === expectedChecksum;
};

module.exports = {
  validatePassportFI,
  validateVatFI,
};
