const {
  validateGicDE,
  validateVatDE,
  validatePassportDE,
} = require("../../country_validations/de");

describe("validateGicDE", () => {
  it("should return true for a valid old GIC", () => {
    expect(validateGicDE("1234567890")).toBe(true);
  });

  it("should return true for a valid new GIC", () => {
    expect(validateGicDE("l12341234")).toBe(true);
    expect(validateGicDE("l123412345")).toBe(true);
    expect(validateGicDE("l123412345d")).toBe(true);
  });

  it("should return false for an invalid GIC", () => {
    expect(validateGicDE("123456789")).toBe(false);
    expect(validateGicDE("12345678901")).toBe(false);
    expect(validateGicDE("l1234123")).toBe(false);
    expect(validateGicDE("l1234123456")).toBe(false);
    expect(validateGicDE("l123412345de")).toBe(false);
    expect(validateGicDE("l-123412345")).toBe(false);
  });
});

describe("validatePassportDE", () => {
  it("should return true for a valid passport", () => {
    expect(validatePassportDE("c123CFG45")).toBe(true);
    expect(validatePassportDE("c123CFG454")).toBe(true);
    expect(validatePassportDE("c123CFG454d")).toBe(true);
    expect(validatePassportDE("h01234567")).toBe(true);
  });

  it("should return false for an invalid passport", () => {
    expect(validatePassportDE("c123CFG4")).toBe(false);
    expect(validatePassportDE("c123CFG4567")).toBe(false);
    expect(validatePassportDE("c123CFG456de")).toBe(false);
    expect(validatePassportDE("c-123CFG456")).toBe(false);
    expect(validatePassportDE("Z12341234")).toBe(false);
    expect(validatePassportDE("H0123U123")).toBe(false);
  });
});

describe("validateVatDE", () => {
  it("should return true for a valid VAT", () => {
    expect(validateVatDE("DE123456789")).toBe(true);
  });

  it("should return false for an invalid VAT", () => {
    expect(validateVatDE("1234567890")).toBe(false);
    expect(validateVatDE("DE1234567890")).toBe(false);
    expect(validateVatDE("DE123456789012")).toBe(false);
  });
});
