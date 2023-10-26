const validateGicDE = (gic) => {
  gic = gic.toUpperCase();

  // Regular expression to match a German identity card number (< 1 November, 2010)
  const oldGicPattern = /^\d{10}$/;

  // Regular expression to match a German identity card number (>= 1 November, 2010)
  const newGicPattern = /^[LMNPRTVWXY][CFGHJKLMNPRTVWXYZ0-9]{8}\d?D?$/;

  // Check if the identity card number matches the pattern
  if (!oldGicPattern.test(gic) && !newGicPattern.test(gic)) return false;

  //TODO: Validate the checksum
  return true;
};

const validatePassportDE = (passport) => {
  passport = passport.toUpperCase();

  // Regular expression to match a German passport number
  const passportPattern = /^[CFGHJK][CFGHJKLMNPRTVWXYZ0-9]{8}\d?D?$/;

  // Check if the passport number matches the pattern
  if (!passportPattern.test(passport)) return false;

  // TODO: Validate the checksum
  return true;
};

const validateVatDE = (vat) => {
  vat = vat.toUpperCase();

  // Regular expression to match a German VAT number
  const vatPattern = /^DE\d{11}$/;

  // Check if the VAT number matches the pattern
  if (!vatPattern.test(vat)) return false;

  // TODO: Validate the checksum
  return true;
};

module.exports = {
  validateGicDE,
  validatePassportDE,
  validateVatDE,
};
