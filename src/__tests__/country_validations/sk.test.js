const { validateVatSK } = require("../../country_validations/sk");

describe("validateVatSK", () => {
  it("should return false for an invalid VAT from SK", () => {
    expect(validateVatSK("SK1")).toBe(false);
    expect(validateVatSK("SK-12345678")).toBe(false);
    expect(validateVatSK("SK123456789")).toBe(false);
    expect(validateVatSK("SK12345678901")).toBe(false);
    expect(validateVatSK("SK-1234567890")).toBe(false);
    expect(validateVatSK("KS1234567890")).toBe(false);
  });

  it("should return true for a valid VAT from SK", () => {
    expect(validateVatSK("SK1234567895")).toBe(true);
  });
});
