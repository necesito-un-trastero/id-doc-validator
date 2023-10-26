const testStringAgainstRegex = (inputString, regexPattern) => {
  // Transform the input string to uppercase
  inputString = inputString.toUpperCase();

  // Check if the input string matches the pattern
  if (!regexPattern.test(inputString)) return false;

  return true;
};

module.exports = {
  testStringAgainstRegex,
};
