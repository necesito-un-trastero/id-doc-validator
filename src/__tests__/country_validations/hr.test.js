const {
  validatePassportHR,
  validateVatHR,
} = require("../../country_validations/hr");

describe("validatePassportHR", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportHR("12345678")).toBe(false);
    expect(validatePassportHR("1234567890")).toBe(false);
    expect(validatePassportHR("123ABC789")).toBe(false);
    expect(validatePassportHR("123 456 789")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportHR("123456789")).toBe(true);
  });
});

describe("validateVatHR", () => {
  it("should return false for an invalid vat", () => {
    expect(validateVatHR("12345678901")).toBe(false);
    expect(validateVatHR("HR1234567890")).toBe(false);
    expect(validateVatHR("HR123456789012")).toBe(false);
    expect(validateVatHR("HR1234567890A")).toBe(false);
    expect(validateVatHR("HR 12345678901")).toBe(false);
    expect(validateVatHR("CR12345678901")).toBe(false);
  });

  it("should return true for a valid vat", () => {
    expect(validateVatHR("HR12345678901")).toBe(true);
  });
});
