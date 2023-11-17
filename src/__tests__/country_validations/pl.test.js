const { validateVatPL } = require("../../country_validations/pl");

describe("validateVatPL", () => {
  it("should return false for an invalid VAT from PL", () => {
    expect(validateVatPL("PL1234567")).toBe(false);
    expect(validateVatPL("PL-12345678")).toBe(false);
    expect(validateVatPL("PL12345678901")).toBe(false);
    expect(validateVatPL("PA1234567890")).toBe(false);
  });

  it("should return true for a valid VAT from PL", () => {
    expect(validateVatPL("PL1234567890")).toBe(true);
  });
});
