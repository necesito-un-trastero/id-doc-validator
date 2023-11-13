const {
  validatePassportBG,
  validateVatBG,
} = require("../../country_validations/bg");

describe("validatePassportBG", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportBG("1234")).toBe(false);
    expect(validatePassportBG("A123456")).toBe(false);
    expect(validatePassportBG("A 123456")).toBe(false);
    expect(validatePassportBG("A12345678")).toBe(false);
    expect(validatePassportBG("A 12345678")).toBe(false);
    expect(validatePassportBG("12345678")).toBe(false);
    expect(validatePassportBG("1234567890")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportBG("123456789")).toBe(true);
  });
});

describe("validateVatBG", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatBG("1234")).toBe(false);
    expect(validateVatBG("BG12345678")).toBe(false);
    expect(validateVatBG("BG12345678901")).toBe(false);
    expect(validateVatBG("BG 12345678")).toBe(false);
    expect(validateVatBG("BA12345678")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatBG("BG1234567890")).toBe(true);
    expect(validateVatBG("BG123456789")).toBe(true);
  });
});
