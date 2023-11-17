const {
  validateCniFR,
  validateVatFR,
} = require("../../country_validations/fr");

describe("validateCniFR", () => {
  it("should return true for valid CNI", () => {
    expect(validateCniFR("123456789012")).toBe(true);
  });

  it("should return false for invalid CNI", () => {
    expect(validateCniFR("12345678901")).toBe(false);
    expect(validateCniFR("1234567890123")).toBe(false);
    expect(validateCniFR("12345678901a")).toBe(false);
    expect(validateCniFR("123 456 789 012")).toBe(false);
  });
});

describe("validateVatFR", () => {
  it("should return true for valid VAT", () => {
    expect(validateVatFR("FR12345678901")).toBe(true);
    expect(validateVatFR("FRA1234567890")).toBe(true);
    expect(validateVatFR("FRAB123456789")).toBe(true);
    expect(validateVatFR("FR1B123456789")).toBe(true);
  });

  it("should return false for invalid VAT", () => {
    expect(validateVatFR("12345678901")).toBe(false);
    expect(validateVatFR("FR1234567890")).toBe(false);
    expect(validateVatFR("FR123456789012")).toBe(false);
    expect(validateVatFR("FR1234567890a")).toBe(false);
    expect(validateVatFR("FR 123 456 789 01")).toBe(false);
  });
});
