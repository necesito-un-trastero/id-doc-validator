const {
  validateGicDE,
  validateVatDE,
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
