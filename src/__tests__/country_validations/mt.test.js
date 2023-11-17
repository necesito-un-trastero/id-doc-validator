const { validateVatMT } = require("../../country_validations/mt");

describe("validateVatMT", () => {
  it("should return false for an invalid VAT from MT", () => {
    expect(validateVatMT("MT1234567")).toBe(false);
    expect(validateVatMT("MT-12345678")).toBe(false);
    expect(validateVatMT("MT1234567890")).toBe(false);
    expect(validateVatMT("MT12345678901")).toBe(false);
    expect(validateVatMT("LV12345678")).toBe(false);
  });

  it("should return true for a valid VAT from MT", () => {
    expect(validateVatMT("MT12345678")).toBe(true);
  });
});
