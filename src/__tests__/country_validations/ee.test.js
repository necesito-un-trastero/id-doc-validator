const { validateVatEE } = require("../../country_validations/ee");

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
