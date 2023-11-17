const { validateCfIT, validateVatIT } = require("../../country_validations/it");

describe("validateCfIT", () => {
  it("should return true for a valid Codice Fiscale", () => {
    expect(validateCfIT("SCRGZL98R27H501I")).toBe(true);
    expect(validateCfIT("PAUMRA46R67G702J")).toBe(true);
    expect(validateCfIT("LMNSMN60H25L219O")).toBe(true);
  });

  it("should return false for an invalid Codice Fiscale", () => {
    expect(validateCfIT("SCRGZL98R27H501")).toBe(false);
    expect(validateCfIT("SCRGZL98R27F501I")).toBe(false);
    expect(validateCfIT("SCRGZL98R27H501IJ")).toBe(false);
    expect(validateCfIT("LMN SMN 60H25 L219O")).toBe(false);
    expect(validateCfIT("LMN-SMN-60H25-L219O")).toBe(false);
  });

  it("should return false for a Codice Fiscale with an invalid checksum", () => {
    expect(validateCfIT("SCRGZL98R27H501J")).toBe(false);
    expect(validateCfIT("PAUMRA46R67G702K")).toBe(false);
    expect(validateCfIT("LMNSMN60H25L219P")).toBe(false);
  });
});

describe("validateVatIT", () => {
  it("should return true for a valid VAT", () => {
    expect(validateVatIT("IT07643520567")).toBe(true);
    expect(validateVatIT("IT13267897331")).toBe(true);
    expect(validateVatIT("it07643520567")).toBe(true);
    expect(validateVatIT("IT 07643520567")).toBe(true);
    expect(validateVatIT("IT.07643520567")).toBe(true);
    expect(validateVatIT("IT-07643520567")).toBe(true);
    expect(validateVatIT("IT,07643520567")).toBe(true);
    expect(validateVatIT("IT12133290960")).toBe(true);
  });

  it("should return false for an invalid VAT", () => {
    expect(validateVatIT("12345678901")).toBe(false);
    expect(validateVatIT("IT1234567890")).toBe(false);
    expect(validateVatIT("IT123456789012")).toBe(false);
    expect(validateVatIT("IT1234567890a")).toBe(false);
    expect(validateVatIT("IT 123 456 789 01")).toBe(false);
    expect(validateVatIT("ES-12345678901")).toBe(false);
    expect(validateVatIT("IT/12345678901")).toBe(false);
  });

  it("should return false for a VAT with an invalid checksum", () => {
    expect(validateVatIT("IT07643520568")).toBe(false);
    expect(validateVatIT("IT13267897332")).toBe(false);
  });
});
