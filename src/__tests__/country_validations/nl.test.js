const { validateVatNL } = require("../../country_validations/nl");

describe("validateVatNL", () => {
  it("should return false for an invalid VAT from NL", () => {
    expect(validateVatNL("NL1234567")).toBe(false);
    expect(validateVatNL("NL-12345678")).toBe(false);
    expect(validateVatNL("NL1234567890")).toBe(false);
    expect(validateVatNL("NL12345678901")).toBe(false);
    expect(validateVatNL("NL123456782A12")).toBe(false);
    expect(validateVatNL("AA123456782B12")).toBe(false);
    expect(validateVatNL("LV12345678")).toBe(false);
  });

  it("should return true for a valid VAT from NL", () => {
    expect(validateVatNL("NL123456782B12")).toBe(true);
  });
});
