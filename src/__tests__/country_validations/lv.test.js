const { validateVatLV } = require("../../country_validations/lv");

describe("validateVatLV", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatLV("LV1234567890")).toBe(false);
    expect(validateVatLV("LV123456789012")).toBe(false);
    expect(validateVatLV("CZ123456789")).toBe(false);
    expect(validateVatLV("LV 123456789")).toBe(false);
    expect(validateVatLV("LV1234567X89")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatLV("LV12345678901")).toBe(true);
    expect(validateVatLV("LV98765432109")).toBe(true);
  });
});
