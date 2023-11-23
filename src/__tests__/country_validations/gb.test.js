const { validateVatGB } = require("../../country_validations/gb");

describe("validateVatGB", () => {
  it("should return false for invalid VAT", () => {
    expect(validateVatGB("123456789")).toBe(false);
    expect(validateVatGB("GB12345678")).toBe(false);
    expect(validateVatGB("GB1234567890")).toBe(false);
    expect(validateVatGB("GB12345678901")).toBe(false);
    expect(validateVatGB("GB1234567890123")).toBe(false);
    expect(validateVatGB("GBGD567")).toBe(false);
    expect(validateVatGB("GBGD1234")).toBe(false);
    expect(validateVatGB("GBHA111")).toBe(false);
  });
});

describe("validateVatGB", () => {
  it("should return true for valid VAT", () => {
    expect(validateVatGB("GB123456789")).toBe(true);
    expect(validateVatGB("GB123456789012")).toBe(true);
    expect(validateVatGB("GBGD123")).toBe(true);
    expect(validateVatGB("GBGD499")).toBe(true);
    expect(validateVatGB("GBHA500")).toBe(true);
    expect(validateVatGB("GBHA999")).toBe(true);
  });
});
