const { validateVatMX } = require("../../country_validations/mx");

describe("validateVatMX", () => {
  it("should return false for an invalid VAT from MX", () => {
    expect(validateVatMX("MX1234567")).toBe(false);
    expect(validateVatMX("MX-12345678")).toBe(false);
    expect(validateVatMX("MX1234567890")).toBe(false);
    expect(validateVatMX("MX12345678901")).toBe(false);
    expect(validateVatMX("MX ABC-012345-ABC")).toBe(false);
    expect(validateVatMX("MX ABCD-012345-ABC")).toBe(false);
    expect(validateVatMX("LV12345678")).toBe(false);
  });

  it("should return true for a valid VAT from MX", () => {
    expect(validateVatMX("MXABCD012345ABC")).toBe(true);
    expect(validateVatMX("MXABCD012345123")).toBe(true);
    expect(validateVatMX("MXABC012345123")).toBe(true);
    expect(validateVatMX("MXABC012345ABC")).toBe(true);
  });
});
