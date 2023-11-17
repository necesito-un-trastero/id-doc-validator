const { validateVatFI } = require("../../country_validations/fi");

describe("validateVatFI", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatFI("FI1234567")).toBe(false); // Less than 8 digits
    expect(validateVatFI("FI123456789")).toBe(false); // More than 8 digits
    expect(validateVatFI("CZ12345678")).toBe(false); // Incorrect country code
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatFI("FI19254537")).toBe(true);
  });

  it("should return true for a VAT with invalid checksum", () => {
    expect(validateVatFI("FI12345675")).toBe(false);
    expect(validateVatFI("FI12345670")).toBe(false);
    expect(validateVatFI("FI98765439")).toBe(false);
    expect(validateVatFI("FI98765437")).toBe(false);
  });
});
