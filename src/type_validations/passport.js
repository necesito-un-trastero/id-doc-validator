const { testStringAgainstRegex } = require("../utils");

const passportRegexByCountryCodeMap = {
  AT: /^[A-Z]\s?\d{7}$/,
  BE: /^[A-Z]{2}\d{7}$/,
  BG: /^\d{9}$/,
  BR: /^[A-Z]{2}\d{6}$/,
  CA: /^[A-Z]{2}\d{6}$/,
  CY: /^[A-Z]\d{6,8}$/,
  CZ: /^\d{8}$/,
  DE: /^[CFGHJK][CFGHJKLMNPRTVWXYZ0-9]{8}\d?D?$/,
  DK: /^\d{9}$/,
  EE: /^[A-Z]{2}\d{7}$/,
  ES: /^[A-Z]{3}\d{6}[A-Z]?$/,
  FI: /^[A-Z]{2}\d{7}$/,
  FR: /^\d{2}[A-Z]{2}\d{5}$/,
  GB: /^\d{9}$/,
  GR: /^[A-Z]{2}\d{7}$/,
  HR: /^\d{9}$/,
  HU: /^[A-Z]{2}\d{6,7}$/,
  IE: /^[0-9A-Z]{2}\d{7}$/,
  IT: /^[0-9A-Z]{2}\d{7}$/,
  LT: /^\d{8}$/,
  LU: /^[A-Z0-9]{8}$/,
  LV: /^[0-9A-Z]{2}\d{7}$/,
  MT: /^\d{7}$/,
  MX: /^[A-Z]\d{8}$/,
  NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
  PL: /^[A-Z]{2}\d{7}$/,
  PT: /^[A-Z]\d{6}$/,
  RO: /^\d{8,9}$/,
  SE: /^\d{8}$/,
  SK: /^[A-Z0-9]{1,2}\d{7}$/,
  SL: /^P[A-Z]\d{7}$/,
  US: /^\d{9}$/,
};

const validatePassport = (passport, countryCode) => {
  const passportRegex = passportRegexByCountryCodeMap[countryCode];

  if (!passportRegex) return false;

  if (!testStringAgainstRegex(passport, passportRegex)) return false;

  return true;
};

module.exports = {
  validatePassport,
};
