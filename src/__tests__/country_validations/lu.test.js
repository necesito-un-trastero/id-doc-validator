const { validateVatLU } = require("../../country_validations/lu");

describe("validateVatLU", () => {
  it("should return false for an invalid VAT from LU", () => {
    expect(validateVatLU("LU1234567")).toBe(false);
    expect(validateVatLU("LU-12345678")).toBe(false);
    expect(validateVatLU("LU1234567890")).toBe(false);
    expect(validateVatLU("LU12345678901")).toBe(false);
    expect(validateVatLU("LV12345678")).toBe(false);
  });

  it("should return true for a valid VAT from LU", () => {
    expect(validateVatLU("LU12345678")).toBe(true);
  });
});
