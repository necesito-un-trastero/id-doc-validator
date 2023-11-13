const {
  validatePassportLV,
  validateVatLV,
} = require("../../country_validations/lv");

describe("validatePassportLV", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportLV("A1234567")).toBe(false);
    expect(validatePassportLV("AA123456")).toBe(false);
    expect(validatePassportLV("AA12345678")).toBe(false);
    expect(validatePassportLV("AA1234X7")).toBe(false);
    expect(validatePassportLV("AB 0123456")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportLV("AA1234567")).toBe(true);
    expect(validatePassportLV("B09876543")).toBe(true);
    expect(validatePassportLV("109876543")).toBe(true);
  });
});

describe("validateVatLV", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatLV("LV1234567890")).toBe(false);
    expect(validateVatLV("LV123456789012")).toBe(false);
    expect(validateVatLV("CZ123456789")).toBe(false);
    expect(validateVatLV("LV 123456789")).toBe(false);
    expect(validateVatLV("LV1234567X89")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatLV("LV12345678901")).toBe(true);
    expect(validateVatLV("LV98765432109")).toBe(true);
  });
});
