const {
  validateNifPT,
  validatePassportPT,
  validateVatPT,
  validateCcPT,
} = require("../../country_validations/pt");

describe("validateNifPT", () => {
  it("should return true for valid NIF", () => {
    expect(validateNifPT("212300644")).toBe(true);
    expect(validateNifPT("228272220")).toBe(true);
    expect(validateNifPT("208796304")).toBe(true);
    expect(validateNifPT("236374427")).toBe(true);
  });

  it("should return false for invalid NIF", () => {
    expect(validateNifPT("1234")).toBe(false);
    expect(validateNifPT("A98765432")).toBe(false);
    expect(validateNifPT("1234567890")).toBe(false);
    expect(validateNifPT("987654321")).toBe(false);
  });

  it("should return false for NIF with invalid control digit", () => {
    expect(validateNifPT("212300645")).toBe(false);
    expect(validateNifPT("228272221")).toBe(false);
    expect(validateNifPT("208796305")).toBe(false);
    expect(validateNifPT("236374428")).toBe(false);
  });
});

describe("validatePassportPT", () => {
  it("should return true for valid passport", () => {
    expect(validatePassportPT("P123456")).toBe(true);
    expect(validatePassportPT("P987654")).toBe(true);
    expect(validatePassportPT("P911111")).toBe(true);
    expect(validatePassportPT("P900551")).toBe(true);
  });

  it("should return false for invalid passport", () => {
    expect(validatePassportPT("1234")).toBe(false);
    expect(validatePassportPT("P1234567X")).toBe(false);
    expect(validatePassportPT("P987654321")).toBe(false);
  });
});

describe("validateVatPT", () => {
  it("should return true for valid VAT", () => {
    expect(validateVatPT("PT123456789")).toBe(true);
    expect(validateVatPT("PT261648969")).toBe(true);
    expect(validateVatPT("PT200706721")).toBe(true);
  });

  it("should return false for invalid VAT", () => {
    expect(validateVatPT("PT1234")).toBe(false);
    expect(validateVatPT("PTA98765432")).toBe(false);
    expect(validateVatPT("PT1234567890")).toBe(false);
    expect(validateVatPT("PT987654321")).toBe(false);
  });
});

describe("validateCcPT", () => {
  it("should return true for valid Cartao Cidadao", () => {
    expect(validateCcPT("13714722 8 ZV3")).toBe(true);
    expect(validateCcPT("13714722 8ZV3")).toBe(true);
    expect(validateCcPT("13714722-8ZV3")).toBe(true);
    expect(validateCcPT("137147228ZV3")).toBe(true);
    expect(validateCcPT("13714722 8-ZV3")).toBe(true);
    expect(validateCcPT("13714722 8 ZV3")).toBe(true);
    expect(validateCcPT("35600712 0-ZW5")).toBe(true);
    expect(validateCcPT("12345678 9 ZZ1")).toBe(true);
    expect(validateCcPT("39860219 0 ZW9")).toBe(true);
    expect(validateCcPT("35993487 0 ZY3")).toBe(true);
    expect(validateCcPT("12158127 6 ZZ1")).toBe(true);
  });

  it("should return false for invalid Cartao Cidadao", () => {
    expect(validateCcPT("13714722/8/ZV3")).toBe(false);
    expect(validateCcPT("13714722.8.ZV3")).toBe(false);
    expect(validateCcPT("1234/0")).toBe(false);
    expect(validateCcPT("A98765432/1")).toBe(false);
    expect(validateCcPT("123456789/0")).toBe(false);
    expect(validateCcPT("359934877 0 ZY3")).toBe(false);
    expect(validateCcPT("13714722 8 XV3")).toBe(false);
    expect(validateCcPT("13714722-8-XV3")).toBe(false);
  });

  it("should return false for Cartao Cidadao with invalid checksum", () => {
    expect(validateCcPT("13714722 8 ZV4")).toBe(false);
    expect(validateCcPT("13714722 8 ZV5")).toBe(false);
    expect(validateCcPT("36148741 0 ZY0")).toBe(false);
  });
});
