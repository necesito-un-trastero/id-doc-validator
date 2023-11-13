const {
  validatePassportCY,
  validateVatCY,
} = require("../../country_validations/cy");

describe("validatePassportCY", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportCY("1234")).toBe(false);
    expect(validatePassportCY("12345678")).toBe(false);
    expect(validatePassportCY("A12345")).toBe(false);
    expect(validatePassportCY("A123456789")).toBe(false);
    expect(validatePassportCY("A 1234567")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportCY("A123456")).toBe(true);
    expect(validatePassportCY("A1234567")).toBe(true);
    expect(validatePassportCY("A12345678")).toBe(true);
  });
});

describe("validateVatCY", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatCY("1234")).toBe(false);
    expect(validateVatCY("CY12345678")).toBe(false);
    expect(validateVatCY("C12345678A")).toBe(false);
    expect(validateVatCY("CY 12345678")).toBe(false);
    expect(validateVatCY("BA12345678")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatCY("CY12345678A")).toBe(true);
    expect(validateVatCY("CY12345678k")).toBe(true);
  });
});
