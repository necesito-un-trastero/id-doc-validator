const {
  validatePassportEE,
  validateVatEE,
} = require("../../country_validations/ee");

describe("validatePassportEE", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportEE("A1234567")).toBe(false); // Invalid series code
    expect(validatePassportEE("AA123456")).toBe(false); // Less than 7 digits
    expect(validatePassportEE("AA12345678")).toBe(false); // More than 7 digits
    expect(validatePassportEE("AA1234X7")).toBe(false); // Non-digit character
    expect(validatePassportEE("AB 0123456")).toBe(false); // Space character
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportEE("AA1234567")).toBe(true);
    expect(validatePassportEE("BB9876543")).toBe(true);
  });
});

describe("validateVatEE", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatEE("EE12345678")).toBe(false); // Less than 9 digits
    expect(validateVatEE("EE1234567890")).toBe(false); // More than 9 digits
    expect(validateVatEE("CZ12345678")).toBe(false); // Incorrect country code
    expect(validateVatEE("EE 12345678")).toBe(false); // Space character
    expect(validateVatEE("EE1234567X")).toBe(false); // Non-digit character
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatEE("EE123456789")).toBe(true);
    expect(validateVatEE("EE987654321")).toBe(true);
  });
});
