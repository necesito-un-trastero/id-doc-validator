const { validateVatSL } = require("../../country_validations/sl");

describe("validateVatSL", () => {
  it("should return false for an invalid VAT from SL", () => {
    expect(validateVatSL("SI1")).toBe(false);
    expect(validateVatSL("SI-12345678")).toBe(false);
    expect(validateVatSL("SL12345678")).toBe(false);
    expect(validateVatSL("SI123456789")).toBe(false);
    expect(validateVatSL("SI12345678901")).toBe(false);
    expect(validateVatSL("SI-1234567890")).toBe(false);
    expect(validateVatSL("LS12345678")).toBe(false);
  });

  it("should return true for a valid VAT from SL", () => {
    expect(validateVatSL("SI12345678")).toBe(true);
  });
});
