const { validateVatIE } = require("../../country_validations/ie");

describe("validateVatIE", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatIE("IE1234567")).toBe(false);
    expect(validateVatIE("IE1234567ABC")).toBe(false);
    expect(validateVatIE("IEA234567AB")).toBe(false);
    expect(validateVatIE("IE 1234567AB")).toBe(false);
    expect(validateVatIE("IE-1234567AB")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatIE("IE1234567AB")).toBe(true);
    expect(validateVatIE("IE1X34567AB")).toBe(true);
    expect(validateVatIE("IE1234567A")).toBe(true);
    expect(validateVatIE("IE1X34567A")).toBe(true);
  });
});
