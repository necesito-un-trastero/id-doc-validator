const { validateVatCZ } = require("../../country_validations/cz");

describe("validateVatCZ", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatCZ("1234")).toBe(false);
    expect(validateVatCZ("CZ1234567")).toBe(false);
    expect(validateVatCZ("CZ12345678901")).toBe(false);
    expect(validateVatCZ("ATU12345678")).toBe(false);
    expect(validateVatCZ("CZ 12345678")).toBe(false);
    expect(validateVatCZ("CZ-123456789")).toBe(false);
    expect(validateVatCZ("CZ.1234567890")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatCZ("CZ12345678")).toBe(true);
    expect(validateVatCZ("CZ123456789")).toBe(true);
    expect(validateVatCZ("CZ1234567890")).toBe(true);
  });
});
