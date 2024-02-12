const { validateVatCO } = require("../../country_validations/co");

describe("validateVatCO", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatCO("1234")).toBe(false);
    expect(validateVatCO("CO12345678")).toBe(false);
    expect(validateVatCO("C12345678A")).toBe(false);
    expect(validateVatCO("CO123456789")).toBe(false);
    expect(validateVatCO("123456789A")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatCO("CO123456789A")).toBe(true);
  });
});
