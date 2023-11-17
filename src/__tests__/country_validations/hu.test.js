const { validateVatHU } = require("../../country_validations/hu");

describe("validateVatHU", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatHU("1234")).toBe(false);
    expect(validateVatHU("HU1234567")).toBe(false);
    expect(validateVatHU("HU123456789")).toBe(false);
    expect(validateVatHU("HU 12345678")).toBe(false);
    expect(validateVatHU("HU-12345678")).toBe(false);
    expect(validateVatHU("BA12345678")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatHU("HU12345678")).toBe(true);
    expect(validateVatHU("HU12345679")).toBe(true);
  });
});
