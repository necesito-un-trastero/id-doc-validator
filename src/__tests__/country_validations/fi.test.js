const {
  validatePassportFI,
  validateVatFI,
} = require("../../country_validations/fi");

describe("validatePassportFI", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassportFI("A1234567")).toBe(false); // Invalid series code
    expect(validatePassportFI("AA123456")).toBe(false); // Less than 7 digits
    expect(validatePassportFI("AA12345678")).toBe(false); // More than 7 digits
    expect(validatePassportFI("AA1234X7")).toBe(false); // Non-digit character
    expect(validatePassportFI("AA 1234567")).toBe(false); // Space
  });

  it("should return true for a valid passport", () => {
    expect(validatePassportFI("AA1234567")).toBe(true);
    expect(validatePassportFI("BB9876543")).toBe(true);
  });
});

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
