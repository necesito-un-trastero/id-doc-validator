const {
  validateNifPT,
  validatePassportPT,
  validateVatPT,
  validateCartaoCidadaoPT,
} = require("../../country_validations/pt");

describe("validateNifPT", () => {
  it("should return true for valid NIF", () => {
    expect(validateNifPT("212300644")).toBe(true);
    expect(validateNifPT("228272220")).toBe(true);
    expect(validateNifPT("208796304")).toBe(true);
  });

  it("should return false for invalid NIF", () => {
    expect(validateNifPT("1234")).toBe(false);
    expect(validateNifPT("A98765432")).toBe(false);
    expect(validateNifPT("1234567890")).toBe(false);
    expect(validateNifPT("987654321")).toBe(false);
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

describe("validateCartaoCidadaoPT", () => {
  it("should return true for valid Cartao Cidadao", () => {
    expect(validateCartaoCidadaoPT("13714722 8 ZV3")).toBe(true);
    expect(validateCartaoCidadaoPT("13714722 8-ZV3")).toBe(true);
    expect(validateCartaoCidadaoPT("13714722 8 ZV3")).toBe(true);
    expect(validateCartaoCidadaoPT("35600712 0-ZW5")).toBe(true);
    expect(validateCartaoCidadaoPT("12345678 9 ZZ1")).toBe(true);
    expect(validateCartaoCidadaoPT("39860219 0 ZW9")).toBe(true);
    expect(validateCartaoCidadaoPT("35993487 0 ZY3")).toBe(true);
  });

  it("should return false for invalid Cartao Cidadao", () => {
    expect(validateCartaoCidadaoPT("1234/0")).toBe(false);
    expect(validateCartaoCidadaoPT("A98765432/1")).toBe(false);
    expect(validateCartaoCidadaoPT("123456789/0")).toBe(false);
    expect(validateCartaoCidadaoPT("359934877 0 ZY3")).toBe(false);
    expect(validateCartaoCidadaoPT("13714722 8 XV3")).toBe(false);
    expect(validateCartaoCidadaoPT("13714722-8-XV3")).toBe(false);
  });
});
