const { validateVatGR } = require("../../country_validations/gr");

describe("validateVatGR", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatGR("EL12345678")).toBe(false); // Less than 9 digits
    expect(validateVatGR("EL1234567890")).toBe(false); // More than 9 digits
    expect(validateVatGR("CZ12345678")).toBe(false); // Incorrect country code
    expect(validateVatGR("EL 12345678")).toBe(false); // Space character
    expect(validateVatGR("EL1234567X")).toBe(false); // Non-digit character
    expect(validateVatGR("EL123456789")).toBe(false); // Invalid checksum
    expect(validateVatGR("EL413817298")).toBe(false); // Invalid checksum
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatGR("EL410921805")).toBe(true);
    expect(validateVatGR("EL067380637")).toBe(true);
    expect(validateVatGR("EL948510530")).toBe(true);
    expect(validateVatGR("EL790463874")).toBe(true);
  });
});
