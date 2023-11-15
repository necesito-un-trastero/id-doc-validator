const { testStringAgainstRegex } = require("../utils");

const validatePassportFI = (passport) => {
  const passportPattern = /^[A-Z]{2}\d{7}$/;

  if (!testStringAgainstRegex(passport, passportPattern)) return false;

  return true;
};

const validateVatFI = (vat) => {
  const vatPattern = /^FI\d{8}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  const vatWithoutChecksum = vat.slice(2);
  if (!validateWeightedChecksum(vatWithoutChecksum)) return false;

  return true;
};

const validateWeightedChecksum = (inputString) => {
  const providedChecksum = Number(inputString.slice(-1));

  inputString = inputString.slice(0, -1);

  const weights = [2, 4, 8, 5, 10, 9, 7];

  const digits = inputString.split("").reverse().map(Number);

  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * weights[index];
  }, 0);

  let expectedChecksum = 11 - (sum % 11);

  if (expectedChecksum > 9) expectedChecksum = 0;

  return providedChecksum === expectedChecksum;
};

module.exports = {
  validatePassportFI,
  validateVatFI,
};
