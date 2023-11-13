const {
  validatePassportAT,
  validateVatAT,
} = require("../../country_validations/at");

describe("validatePassportAT", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportAT("1234")).toBe(false);
    expect(validatePassportAT("A123456")).toBe(false);
    expect(validatePassportAT("A 123456")).toBe(false);
    expect(validatePassportAT("A12345678")).toBe(false);
    expect(validatePassportAT("A 12345678")).toBe(false);
    expect(validatePassportAT("A-1234567")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportAT("A1234567")).toBe(true);
    expect(validatePassportAT("A 1234567")).toBe(true);
    expect(validatePassportAT("b 8767823")).toBe(true);
  });
});

describe("validateVatAT", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatAT("1234")).toBe(false);
    expect(validateVatAT("ESU12345678")).toBe(false);
    expect(validateVatAT("U1234567")).toBe(false);
    expect(validateVatAT("ATE1234567")).toBe(false);
    expect(validateVatAT("AT U1234567")).toBe(false);
    expect(validateVatAT("ATU1234567")).toBe(false);
    expect(validateVatAT("ATU123456890")).toBe(false);
  });

  // TODO: Add check digit tests when implemented
  it("should return true for a valid VAT", () => {
    expect(validateVatAT("ATU12345678")).toBe(true);
  });
});
