const { validateVatDK } = require("../../country_validations/dk");

describe("validateVatDK", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatDK("1234")).toBe(false); // Less than 8 digits
    expect(validateVatDK("DK1234567")).toBe(false); // Missing digits
    expect(validateVatDK("DK123456789")).toBe(false); // More than 8 digits
    expect(validateVatDK("CZ12345678")).toBe(false); // Incorrect country code
    expect(validateVatDK("DK 12345678")).toBe(false); // Includes space
    expect(validateVatDK("DK-12345678")).toBe(false); // Includes dash
    expect(validateVatDK("DK123AB678")).toBe(false); // Includes non-digit characters (except country code)
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatDK("DK12345678")).toBe(true);
    expect(validateVatDK("DK12345679")).toBe(true);
  });
});
