const { validateVatBE } = require("../../country_validations/be");

describe("validateVatBE", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatBE("1234")).toBe(false);
    expect(validateVatBE("BO012341234")).toBe(false);
    expect(validateVatBE("BE112341234")).toBe(false);
    expect(validateVatBE("BE01234123")).toBe(false);
    expect(validateVatBE("BE01234123456")).toBe(false);
    expect(validateVatBE("BE 0112341234")).toBe(false);
    expect(validateVatBE("BE01/1234/1234")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatBE("BE0112341234")).toBe(true);
    expect(validateVatBE("BE02 1234 1234")).toBe(true);
    expect(validateVatBE("BE03-1234-1234")).toBe(true);
    expect(validateVatBE("BE04.1234.1234")).toBe(true);
  });
});
