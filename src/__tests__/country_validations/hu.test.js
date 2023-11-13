const {
  validatePassportHU,
  validateVatHU,
} = require("../../country_validations/hu");

describe("validatePassportHU", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportHU("1234")).toBe(false);
    expect(validatePassportHU("A123456")).toBe(false);
    expect(validatePassportHU("A 123456")).toBe(false);
    expect(validatePassportHU("A12345678")).toBe(false);
    expect(validatePassportHU("A 12345678")).toBe(false);
    expect(validatePassportHU("12345678")).toBe(false);
    expect(validatePassportHU("1234567890")).toBe(false);
    expect(validatePassportHU("AB12345678")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportHU("AB123456")).toBe(true);
    expect(validatePassportHU("CD1234567")).toBe(true);
  });
});

describe("validateVatHU", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatHU("1234")).toBe(false);
    expect(validateVatHU("HU1234567")).toBe(false);
    expect(validateVatHU("HU123456789")).toBe(false);
    expect(validateVatHU("HU 12345678")).toBe(false);
    expect(validateVatHU("HU-12345678")).toBe(false);
    expect(validateVatHU("BA12345678")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatHU("HU12345678")).toBe(true);
    expect(validateVatHU("HU12345679")).toBe(true);
  });
});
