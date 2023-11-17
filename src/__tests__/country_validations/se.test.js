const { validateVatSE } = require("../../country_validations/se");

describe("validateVatSE", () => {
  it("should return false for an invalid VAT from SE", () => {
    expect(validateVatSE("SE1")).toBe(false);
    expect(validateVatSE("SE-12345678")).toBe(false);
    expect(validateVatSE("SE12345678901")).toBe(false);
    expect(validateVatSE("SE1234567890123")).toBe(false);
    expect(validateVatSE("SE-123456789012")).toBe(false);
    expect(validateVatSE("ES123456789012")).toBe(false);
  });

  it("should return true for a valid VAT from SE", () => {
    expect(validateVatSE("SE123456789012")).toBe(true);
  });
});
