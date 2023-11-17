const { validateVatLT } = require("../../country_validations/lt");

describe("validateVatLT", () => {
  it("should return false for an invalid VAT from LT", () => {
    expect(validateVatLT("123456789")).toBe(false);
    expect(validateVatLT("LT12345678")).toBe(false);
    expect(validateVatLT("LT1234567890")).toBe(false);
    expect(validateVatLT("LT12345678901")).toBe(false);
  });

  it("should return true for a valid VAT from LT", () => {
    expect(validateVatLT("LT123456789")).toBe(true);
    expect(validateVatLT("LT123456789012")).toBe(true);
  });
});
