/**
 * Tests a string against a regular expression pattern after converting the string to uppercase.
 *
 * @param {string} inputString - The string to test against the regular expression pattern.
 * @param {RegExp} regexPattern - The regular expression pattern to use for testing.
 * @returns {boolean} - Returns true if the string matches the regular expression pattern, or false if not.
 *
 * This utility function converts the input string to uppercase and then checks if it matches the
 * provided regular expression pattern. It simplifies the process of case-insensitive pattern matching
 * for various validation purposes.
 */
const testStringAgainstRegex = (inputString, regexPattern) => {
  // Transform the input string to uppercase
  inputString = inputString.toUpperCase();

  // Check if the input string matches the pattern
  if (!regexPattern.test(inputString)) return false;

  return true;
};

/**
 * Validates a given string using the Luhn algorithm.
 *
 * @param {string} inputString - The string to validate using the Luhn algorithm.
 * @returns {boolean} - Returns true if the string is valid according to the Luhn algorithm, or false if not.
 *
 * The Luhn algorithm is used to validate a variety of identification numbers, credit card numbers,
 * and more. It verifies the validity of a number based on a simple checksum formula.
 *
 * This function performs Luhn validation on the provided input string and checks whether it passes
 * the algorithm's requirements.
 */
const isValidLuhn = (inputString) => {
  // Get the provided check digit
  const providedLuhnCheckDigit = parseInt(inputString.slice(-1));

  // Remove the last digit from the input string
  inputString = inputString.slice(0, -1);

  // Transform the input string to uppercase
  inputString = inputString.toUpperCase();

  // // Check if the input string contains only digits
  if (!/^\d+$/.test(inputString)) return false;

  // Check if the input string is at least 2 characters long
  if (inputString.length < 2) return false;

  // Calculate the checksum
  let checksum = 0;
  for (let i = 1; i <= inputString.length; i++) {
    let digit = parseInt(inputString[i - 1]);

    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    checksum += digit;
  }

  let expectedCheckDigit = 10 - (checksum % 10);

  if (expectedCheckDigit === 10) expectedCheckDigit = 0;

  return providedLuhnCheckDigit === expectedCheckDigit;
};

/**
 * Converts a character to its numeric equivalent based on its ASCII value.
 *
 * @param {string} value - The character to convert.
 * @returns {number} - The numeric equivalent of the character or -1 if the character is not numeric or an uppercase letter.
 *
 * This function is used to map characters to their numeric values in order to calculate control digits.
 */
const getNumberFromChar = (value) => {
  const charCode = value.toUpperCase().charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) return charCode - 48;
  else if (charCode >= 65 && charCode <= 90) return charCode - 55;
  else return -1;
};

module.exports = {
  getNumberFromChar,
  isValidLuhn,
  testStringAgainstRegex,
};
