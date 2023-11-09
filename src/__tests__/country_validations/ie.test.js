const {
  validatePassportIE,
  validateVatIE,
} = require("../../country_validations/ie");

describe("validatePassportIE", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportIE("K1234567")).toBe(false);
    expect(validatePassportIE("PLA123456")).toBe(false);
    expect(validatePassportIE("ZA1234567")).toBe(false);
    expect(validatePassportIE("PA123456")).toBe(false);
    expect(validatePassportIE("PA12345678")).toBe(false);
    expect(validatePassportIE("PA 1234568")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportIE("PA1234567")).toBe(true);
    expect(validatePassportIE("LA1234567")).toBe(true);
  });
});

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
