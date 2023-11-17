const { validateVatCY } = require("../../country_validations/cy");

describe("validateVatCY", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatCY("1234")).toBe(false);
    expect(validateVatCY("CY12345678")).toBe(false);
    expect(validateVatCY("C12345678A")).toBe(false);
    expect(validateVatCY("CY 12345678")).toBe(false);
    expect(validateVatCY("BA12345678")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatCY("CY12345678A")).toBe(true);
    expect(validateVatCY("CY12345678k")).toBe(true);
  });
});
