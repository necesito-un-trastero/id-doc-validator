const { validateVatBR } = require("../../country_validations/br");

describe("validateVatBR", () => {
  it("should return false for an invalid VAT", () => {
    expect(validateVatBR("1234")).toBe(false);
    expect(validateVatBR("BR1234567890")).toBe(false);
    expect(validateVatBR("BR123456789012")).toBe(false);
    expect(validateVatBR("BR1234567890123456")).toBe(false);
    expect(validateVatBR("BR 12345678901")).toBe(false);
    expect(validateVatBR("BG12345678901")).toBe(false);
  });

  it("should return true for a valid VAT", () => {
    expect(validateVatBR("BR11.111.111/0001-55")).toBe(true);
    expect(validateVatBR("BR11111.111/0001-55")).toBe(true);
    expect(validateVatBR("BR11111111/0001-55")).toBe(true);
    expect(validateVatBR("BR111111110001-55")).toBe(true);
    expect(validateVatBR("BR11111111000155")).toBe(true);
    expect(validateVatBR("BR123.456.789-00")).toBe(true);
    expect(validateVatBR("BR123456.789-00")).toBe(true);
    expect(validateVatBR("BR123456789-00")).toBe(true);
    expect(validateVatBR("BR12345678900")).toBe(true);
  });
});
