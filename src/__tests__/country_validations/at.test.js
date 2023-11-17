const { validateVatAT } = require("../../country_validations/at");

describe("validateVatAT", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatAT("1234")).toBe(false);
    expect(validateVatAT("ESU12345678")).toBe(false);
    expect(validateVatAT("U1234567")).toBe(false);
    expect(validateVatAT("ATE1234567")).toBe(false);
    expect(validateVatAT("AT U1234567")).toBe(false);
    expect(validateVatAT("ATU1234567")).toBe(false);
    expect(validateVatAT("ATU123456890")).toBe(false);
  });

  // TODO: Add check digit tests when implemented
  it("should return true for a valid VAT", () => {
    expect(validateVatAT("ATU12345678")).toBe(true);
  });
});
