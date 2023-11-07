const {
  validatePassportBE,
  validateVatBE,
} = require("../../country_validations/be");

describe("validatePassportBE", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportBE("1234")).toBe(false);
    expect(validatePassportBE("A123456")).toBe(false);
    expect(validatePassportBE("ZZ123456")).toBe(false);
    expect(validatePassportBE("ZZ12345678")).toBe(false);
    expect(validatePassportBE("ZZ 1234567")).toBe(false);
    expect(validatePassportBE("ZZ-1234567")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportBE("KK1234567")).toBe(true);
    expect(validatePassportBE("od1234567")).toBe(true);
  });
});

describe("validateVatBE", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatBE("1234")).toBe(false);
    expect(validateVatBE("BO012341234")).toBe(false);
    expect(validateVatBE("BE112341234")).toBe(false);
    expect(validateVatBE("BE01234123")).toBe(false);
    expect(validateVatBE("BE01234123456")).toBe(false);
    expect(validateVatBE("BE 0112341234")).toBe(false);
    expect(validateVatBE("BE01/1234/1234")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatBE("BE0112341234")).toBe(true);
    expect(validateVatBE("BE02 1234 1234")).toBe(true);
    expect(validateVatBE("BE03-1234-1234")).toBe(true);
    expect(validateVatBE("BE04.1234.1234")).toBe(true);
  });
});
