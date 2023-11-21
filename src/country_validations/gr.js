const { testStringAgainstRegex } = require("../utils");

const validateVatGR = (vat) => {
  const vatPattern = /^EL\d{9}$/;

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  if(!validateGreekVatChecksum(vat.slice(3,vat.length))) return false;

  return true;
};

/**
 * Checks the check digits of a Greek VAT number.
 * Code taken from https://stackoverflow.com/questions/4375511/greek-vat-validation-number-code at 2023-11-21
 * 
 * @param {*} vat 
 */
const validateGreekVatChecksum = (vat) => {

  var total = 0;
  var multipliers = [256,128,64,32,16,8,4,2];

  if(vatnumber.length !== 8 && vatnumber.length !== 9) return false;
  
  //eight character numbers should be prefixed with an 0.
  if (vatnumber.length == 8) {vatnumber = "0" + vatnumber};

  // Extract the next digit and multiply by the counter.
  for (var i = 0; i < 8; i++)
    total = total + Number(vatnumber.charAt(i)) * multipliers[i];

  // Establish check digit.
  total = total % 11;
  if (total > 9) {total = 0;};  

  // Compare it with the last character of the VAT number. If it is the same, 
  // then it's a valid check digit.
  if (total == vatnumber.slice (8,9)) 
    return true
  else 
    return false;
}

module.exports = {
  validateVatGR,
};
