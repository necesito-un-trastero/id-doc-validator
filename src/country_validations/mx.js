const { testStringAgainstRegex } = require("../utils");

const validateVatMX = (vat) => {
  const naturalPersonVatPattern = /^(MX)[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
  const companyVatPattern = /^(MX)[A-Z]{3}[0-9]{6}[A-Z0-9]{3}$/;

  if (
    !testStringAgainstRegex(vat, naturalPersonVatPattern) &&
    !testStringAgainstRegex(vat, companyVatPattern)
  )
    return false;

  return true;
};

module.exports = {
  validateVatMX,
};
