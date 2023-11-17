const { validateVatHR } = require("../../country_validations/hr");

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
