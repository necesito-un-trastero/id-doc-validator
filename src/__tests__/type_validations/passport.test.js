const { validatePassport } = require("../../type_validations/passport");

describe("validatePassport(AT)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "AT")).toBe(false);
    expect(validatePassport("A123456", "AT")).toBe(false);
    expect(validatePassport("A 123456", "AT")).toBe(false);
    expect(validatePassport("A12345678", "AT")).toBe(false);
    expect(validatePassport("A 12345678", "AT")).toBe(false);
    expect(validatePassport("A-1234567", "AT")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("A1234567", "AT")).toBe(true);
    expect(validatePassport("A 1234567", "AT")).toBe(true);
    expect(validatePassport("b 8767823", "AT")).toBe(true);
  });
});

describe("validatePassport(BE)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "BE")).toBe(false);
    expect(validatePassport("A123456", "BE")).toBe(false);
    expect(validatePassport("ZZ123456", "BE")).toBe(false);
    expect(validatePassport("ZZ12345678", "BE")).toBe(false);
    expect(validatePassport("ZZ 1234567", "BE")).toBe(false);
    expect(validatePassport("ZZ-1234567", "BE")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("KK1234567", "BE")).toBe(true);
    expect(validatePassport("od1234567", "BE")).toBe(true);
  });
});

describe("validatePassport(BG)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "BG")).toBe(false);
    expect(validatePassport("A123456", "BG")).toBe(false);
    expect(validatePassport("A 123456", "BG")).toBe(false);
    expect(validatePassport("A12345678", "BG")).toBe(false);
    expect(validatePassport("A 12345678", "BG")).toBe(false);
    expect(validatePassport("12345678", "BG")).toBe(false);
    expect(validatePassport("1234567890", "BG")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("123456789", "BG")).toBe(true);
  });
});

describe("validatePassport(CA)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "CA")).toBe(false);
    expect(validatePassport("A123456", "CA")).toBe(false);
    expect(validatePassport("A 123456", "CA")).toBe(false);
    expect(validatePassport("A12345678", "CA")).toBe(false);
    expect(validatePassport("ABC123456", "CA")).toBe(false);
    expect(validatePassport("AB-123456", "CA")).toBe(false);
    expect(validatePassport("12345678", "CA")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AB123456", "CA")).toBe(true);
  });
});

describe("validatePassport(CY)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "CY")).toBe(false);
    expect(validatePassport("12345678", "CY")).toBe(false);
    expect(validatePassport("A12345", "CY")).toBe(false);
    expect(validatePassport("A123456789", "CY")).toBe(false);
    expect(validatePassport("A 1234567", "CY")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("A123456", "CY")).toBe(true);
    expect(validatePassport("A1234567", "CY")).toBe(true);
    expect(validatePassport("A12345678", "CY")).toBe(true);
  });
});

describe("validatePassport(CZ)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "CZ")).toBe(false);
    expect(validatePassport("123456789", "CZ")).toBe(false);
    expect(validatePassport("A1234567", "CZ")).toBe(false);
    expect(validatePassport("CZ123456", "CZ")).toBe(false);
    expect(validatePassport("1234567CZ", "CZ")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("12345678", "CZ")).toBe(true);
    expect(validatePassport("87654321", "CZ")).toBe(true);
  });
});

describe("validatePassport(DE)", () => {
  it("should return true for a valid passport", () => {
    expect(validatePassport("c123CFG45", "DE")).toBe(true);
    expect(validatePassport("c123CFG454", "DE")).toBe(true);
    expect(validatePassport("c123CFG454d", "DE")).toBe(true);
    expect(validatePassport("h01234567", "DE")).toBe(true);
  });

  it("should return false for an invalid passport", () => {
    expect(validatePassport("c123CFG4", "DE")).toBe(false);
    expect(validatePassport("c123CFG4567", "DE")).toBe(false);
    expect(validatePassport("c123CFG456de", "DE")).toBe(false);
    expect(validatePassport("c-123CFG456", "DE")).toBe(false);
    expect(validatePassport("Z12341234", "DE")).toBe(false);
    expect(validatePassport("H0123U123", "DE")).toBe(false);
  });
});

describe("validatePassport(DK)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("12345678", "DK")).toBe(false);
    expect(validatePassport("1234567890", "DK")).toBe(false);
    expect(validatePassport("A12345678", "DK")).toBe(false);
    expect(validatePassport("DK12345678", "DK")).toBe(false);
    expect(validatePassport("12345678DK", "DK")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("123456789", "DK")).toBe(true);
    expect(validatePassport("987654321", "DK")).toBe(true);
  });
});

describe("validatePassport(EE)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("A1234567", "EE")).toBe(false);
    expect(validatePassport("AA123456", "EE")).toBe(false);
    expect(validatePassport("AA12345678", "EE")).toBe(false);
    expect(validatePassport("AA1234X7", "EE")).toBe(false);
    expect(validatePassport("AB 0123456", "EE")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "EE")).toBe(true);
    expect(validatePassport("BB9876543", "EE")).toBe(true);
  });
});

describe("validatePassport(ES)", () => {
  it("should return true for valid passport", () => {
    expect(validatePassport("paa333388", "ES")).toBe(true);
    expect(validatePassport("ZAB000234", "ES")).toBe(true);
    expect(validatePassport("ZAB000234J", "ES")).toBe(true);
  });

  it("should return false for invalid passport", () => {
    expect(validatePassport("12345678", "ES")).toBe(false);
    expect(validatePassport("12345678X1", "ES")).toBe(false);
    expect(validatePassport("12345678-X", "ES")).toBe(false);
    expect(validatePassport("A3082433R", "ES")).toBe(false);
    expect(validatePassport("47008288z", "ES")).toBe(false);
    expect(validatePassport("Z-3082433-R", "ES")).toBe(false);
    expect(validatePassport("ZA000234A", "ES")).toBe(false);
  });
});

describe("validatePassport(FI)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("A1234567", "FI")).toBe(false);
    expect(validatePassport("AA123456", "FI")).toBe(false);
    expect(validatePassport("AA12345678", "FI")).toBe(false);
    expect(validatePassport("AA1234X7", "FI")).toBe(false);
    expect(validatePassport("AA 1234567", "FI")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "FI")).toBe(true);
    expect(validatePassport("BB9876543", "FI")).toBe(true);
  });
});

describe("validatePassport(FR)", () => {
  it("should return true for valid passport", () => {
    expect(validatePassport("12AB34567", "FR")).toBe(true);
  });

  it("should return false for invalid passport", () => {
    expect(validatePassport("12345678", "FR")).toBe(false);
    expect(validatePassport("12345678X1", "FR")).toBe(false);
    expect(validatePassport("12345678-X", "FR")).toBe(false);
    expect(validatePassport("A3082433R", "FR")).toBe(false);
    expect(validatePassport("47008288z", "FR")).toBe(false);
    expect(validatePassport("Z-3082433-R", "FR")).toBe(false);
  });
});

describe("validatePassport(GB)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("12345678", "GB")).toBe(false);
    expect(validatePassport("1234567890", "GB")).toBe(false);
    expect(validatePassport("123-456-789", "GB")).toBe(false);
    expect(validatePassport("123ABC789", "GB")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("123456789", "GB")).toBe(true);
  });
});

describe("validatePassport(GR)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("A1234567", "GR")).toBe(false);
    expect(validatePassport("AA12345", "GR")).toBe(false);
    expect(validatePassport("AA12345678", "GR")).toBe(false);
    expect(validatePassport("AA1234X7", "GR")).toBe(false);
    expect(validatePassport("AB 0123456", "GR")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "GR")).toBe(true);
    expect(validatePassport("BB9876543", "GR")).toBe(true);
  });
});

describe("validatePassport(HR)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("12345678", "HR")).toBe(false);
    expect(validatePassport("1234567890", "HR")).toBe(false);
    expect(validatePassport("123ABC789", "HR")).toBe(false);
    expect(validatePassport("123 456 789", "HR")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("123456789", "HR")).toBe(true);
  });
});

describe("validatePassport(HU)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "HU")).toBe(false);
    expect(validatePassport("A123456", "HU")).toBe(false);
    expect(validatePassport("A 123456", "HU")).toBe(false);
    expect(validatePassport("A12345678", "HU")).toBe(false);
    expect(validatePassport("A 12345678", "HU")).toBe(false);
    expect(validatePassport("12345678", "HU")).toBe(false);
    expect(validatePassport("1234567890", "HU")).toBe(false);
    expect(validatePassport("AB12345678", "HU")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AB123456", "HU")).toBe(true);
    expect(validatePassport("CD1234567", "HU")).toBe(true);
  });
});

describe("validatePassport(IE)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("K1234567", "IE")).toBe(false);
    expect(validatePassport("PLA123456", "IE")).toBe(false);
    expect(validatePassport("ZA1234567", "IE")).toBe(false);
    expect(validatePassport("PA123456", "IE")).toBe(false);
    expect(validatePassport("PA12345678", "IE")).toBe(false);
    expect(validatePassport("PA 1234568", "IE")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("PA1234567", "IE")).toBe(true);
    expect(validatePassport("LA1234567", "IE")).toBe(true);
  });
});

describe("validatePassport(IT)", () => {
  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "IT")).toBe(true);
    expect(validatePassport("a12345678", "IT")).toBe(true);
    expect(validatePassport("B12345678", "IT")).toBe(true);
    expect(validatePassport("123456789", "IT")).toBe(true);
  });

  it("should return false for an invalid passport", () => {
    expect(validatePassport("12345678", "IT")).toBe(false);
    expect(validatePassport("12345678X", "IT")).toBe(false);
    expect(validatePassport("12345678-X", "IT")).toBe(false);
    expect(validatePassport("A3082433R", "IT")).toBe(false);
    expect(validatePassport("47008288z", "IT")).toBe(false);
    expect(validatePassport("Z-3082433-R", "IT")).toBe(false);
    expect(validatePassport("AA123A123", "IT")).toBe(false);
  });
});

describe("validatePassport(LT)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "LT")).toBe(false);
    expect(validatePassport("123456789", "LT")).toBe(false);
    expect(validatePassport("A1234567", "LT")).toBe(false);
    expect(validatePassport("LT123456", "LT")).toBe(false);
    expect(validatePassport("1234567LT", "LT")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("12345678", "LT")).toBe(true);
    expect(validatePassport("87654321", "LT")).toBe(true);
  });
});

describe("validatePassport(LU)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234", "LU")).toBe(false);
    expect(validatePassport("123456789", "LT")).toBe(false);
    expect(validatePassport("ABCD-1234", "LT")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("1A2B3C4D", "LU")).toBe(true);
    expect(validatePassport("1a2b3c4d", "LU")).toBe(true);
  });
});

describe("validatePassport(LV)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("A1234567", "LV")).toBe(false);
    expect(validatePassport("AA123456", "LV")).toBe(false);
    expect(validatePassport("AA12345678", "LV")).toBe(false);
    expect(validatePassport("AA1234X7", "LV")).toBe(false);
    expect(validatePassport("AB 0123456", "LV")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "LV")).toBe(true);
    expect(validatePassport("B09876543", "LV")).toBe(true);
    expect(validatePassport("109876543", "LV")).toBe(true);
  });
});

describe("validatePassport(MT)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("123456", "MT")).toBe(false);
    expect(validatePassport("12345678", "MT")).toBe(false);
    expect(validatePassport("123ABCD", "MT")).toBe(false);
    expect(validatePassport("123.456.7", "MT")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("1234567", "MT")).toBe(true);
  });
});

describe("validatePassport(MX)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "MX")).toBe(false);
    expect(validatePassport("12345678", "MX")).toBe(false);
    expect(validatePassport("123456789", "MX")).toBe(false);
    expect(validatePassport("1234567A", "MX")).toBe(false);
    expect(validatePassport("1234567-A", "MX")).toBe(false);
    expect(validatePassport("A1234567", "MX")).toBe(false);
    expect(validatePassport("A-12345678", "MX")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("A12345678", "MX")).toBe(true);
    expect(validatePassport("Z87654321", "MX")).toBe(true);
  });
});

describe("validatePassport(NL)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "NL")).toBe(false);
    expect(validatePassport("12345678", "NL")).toBe(false);
    expect(validatePassport("123456789", "NL")).toBe(false);
    expect(validatePassport("1234567A", "NL")).toBe(false);
    expect(validatePassport("1234567-A", "NL")).toBe(false);
    expect(validatePassport("A1234567", "NL")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "NL")).toBe(true);
    expect(validatePassport("BBabcdef3", "NL")).toBe(true);
    expect(validatePassport("BBa1c2ef3", "NL")).toBe(true);
  });
});

describe("validatePassport(PL)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "PL")).toBe(false);
    expect(validatePassport("12345678", "PL")).toBe(false);
    expect(validatePassport("A1234567", "PL")).toBe(false);
    expect(validatePassport("1234567AA", "PL")).toBe(false);
    expect(validatePassport("AA-1234567", "PL")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("AA1234567", "PL")).toBe(true);
  });
});

describe("validatePassport(PT)", () => {
  it("should return false for invalid passport", () => {
    expect(validatePassport("1234", "PT")).toBe(false);
    expect(validatePassport("P1234567X", "PT")).toBe(false);
    expect(validatePassport("P987654321", "PT")).toBe(false);
  });

  it("should return true for valid passport", () => {
    expect(validatePassport("P123456", "PT")).toBe(true);
    expect(validatePassport("P987654", "PT")).toBe(true);
    expect(validatePassport("P911111", "PT")).toBe(true);
    expect(validatePassport("P900551", "PT")).toBe(true);
  });
});

describe("validatePassport(RO)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "RO")).toBe(false);
    expect(validatePassport("1234567890", "RO")).toBe(false);
    expect(validatePassport("123AB678", "RO")).toBe(false);
    expect(validatePassport("123AB6789", "RO")).toBe(false);
    expect(validatePassport("123.456.789", "RO")).toBe(false);
    expect(validatePassport("123-456-789", "RO")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("12345678", "RO")).toBe(true);
    expect(validatePassport("876543210", "RO")).toBe(true);
  });
});

describe("validatePassport(SE)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "SE")).toBe(false);
    expect(validatePassport("123456789", "SE")).toBe(false);
    expect(validatePassport("A1234567", "SE")).toBe(false);
    expect(validatePassport("SE123456", "SE")).toBe(false);
    expect(validatePassport("123-456.78", "SE")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("12345678", "SE")).toBe(true);
    expect(validatePassport("87654321", "SE")).toBe(true);
  });
});

describe("validatePassport(SK)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "SK")).toBe(false);
    expect(validatePassport("123456789", "SK")).toBe(false);
    expect(validatePassport("A123456", "SK")).toBe(false);
    expect(validatePassport("SE123456", "SK")).toBe(false);
    expect(validatePassport("123-456.78", "SK")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("12345678", "SK")).toBe(true);
    expect(validatePassport("a1234567", "SK")).toBe(true);
  });
});

describe("validatePassport(SL)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "SL")).toBe(false);
    expect(validatePassport("123456789", "SL")).toBe(false);
    expect(validatePassport("A123456", "SL")).toBe(false);
    expect(validatePassport("SE123456", "SL")).toBe(false);
    expect(validatePassport("123-456.78", "SL")).toBe(false);
    expect(validatePassport("L12345678", "SL")).toBe(false);
    expect(validatePassport("PA234567", "SL")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("PA1234567", "SL")).toBe(true);
    expect(validatePassport("PZ1234567", "SL")).toBe(true);
  });
});

describe("validatePassport(US)", () => {
  it("should return false for an invalid passport", () => {
    expect(validatePassport("1234567", "US")).toBe(false);
    expect(validatePassport("A123456", "US")).toBe(false);
    expect(validatePassport("SE123456", "US")).toBe(false);
    expect(validatePassport("123-456.789", "US")).toBe(false);
    expect(validatePassport("L12345678", "US")).toBe(false);
    expect(validatePassport("PA234567", "US")).toBe(false);
  });

  it("should return true for a valid passport", () => {
    expect(validatePassport("123456789", "US")).toBe(true);
    expect(validatePassport("987654321", "US")).toBe(true);
  });
});
