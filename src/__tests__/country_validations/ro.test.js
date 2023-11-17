const { validateVatRO } = require("../../country_validations/ro");

describe("validateVatRO", () => {
  it("should return false for an invalid VAT from RO", () => {
    expect(validateVatRO("RO1")).toBe(false);
    expect(validateVatRO("RO-12345678")).toBe(false);
    expect(validateVatRO("RO12345678901")).toBe(false);
    expect(validateVatRO("RO123456789012")).toBe(false);
    expect(validateVatRO("RO12abc")).toBe(false);
    expect(validateVatRO("AA123456782B12")).toBe(false);
    expect(validateVatRO("LV12345678")).toBe(false);
  });

  it("should return true for a valid VAT from RO", () => {
    expect(validateVatRO("RO12")).toBe(true);
    expect(validateVatRO("RO123")).toBe(true);
    expect(validateVatRO("RO1234")).toBe(true);
    expect(validateVatRO("RO12345")).toBe(true);
    expect(validateVatRO("RO123456")).toBe(true);
    expect(validateVatRO("RO1234567")).toBe(true);
    expect(validateVatRO("RO12345678")).toBe(true);
    expect(validateVatRO("RO123456789")).toBe(true);
    expect(validateVatRO("RO1234567890")).toBe(true);
  });
});
