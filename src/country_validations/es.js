/**
 * Validates a Spanish Documento Nacional de Identidad (DNI) number.
 *
 * @param {string} dni - The DNI number to validate.
 * @returns {boolean} - Returns true if the DNI is valid, false otherwise.
 *
 * This function checks if the provided DNI number adheres to the format requirements for a Spanish DNI:
 * - It must consist of 8 digits followed by an uppercase letter.
 * - The last character is a checksum letter obtained using the modulo 23 algorithm.
 * - The algorithm ensures that the DNI number is correctly formatted and that the checksum is valid.
 */
const validateDniES = (dni) => {
  dni = dni.toUpperCase();

  // Regular expression to match a DNI with 8 digits followed by an uppercase letter
  const dniPattern = /^\d{8}[A-Z]$/;

  // Check if the DNI matches the pattern
  if (!dniPattern.test(dni)) return false;
  
  // Check the checksum
  if (!validateDniChecksum(dni)) return false;

  return true;
};

const validateNifES = (nif) => {
  return true;
};

const validateNieES = (nie) => {
  return true;
};

const validatePassportES = (passport) => {
  return true;
};

const validateDniChecksum = (dni) => {
  // Valid letters for control
  validLetters = "TRWAGMYFPDXBNJZSQVHLCKE";

  // Get the numeric part of the DNI
  const dniNumbers = dni.slice(0, -1);
  const dniLetter = dni.slice(-1);

  // Calculate the control letter
  const numericDni = parseInt(dniNumbers, 10);
  const controlLetterIndex = numericDni % 23;

  // Get the control letter
  const controlLetter = validLetters[controlLetterIndex];

  // Compare the control letter with the one in the DNI
  if (controlLetter !== dniLetter) return false;

  return true;
}

module.exports = {
  validateDniES,
  validateNifES,
  validateNieES,
  validatePassportES,
};
