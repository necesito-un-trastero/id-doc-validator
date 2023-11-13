const {
  isValidIdDoc,
  supportedIdDocsByCountry,
  isValidViesVat,
  isValidVat,
  supportedCountriesIdDoc,
  supportedCountriesVat,
} = require("..");

describe("isValidIdDoc", () => {
  it("should return false for missing parameters", () => {
    expect(isValidIdDoc()).toBe(false);
    expect(isValidIdDoc("123456789")).toBe(false);
    expect(isValidIdDoc("1234", null, "dni")).toBe(false);
  });

  it("should return false for invalid parameters", () => {
    expect(isValidIdDoc(123456789, "ES", "dni")).toBe(false);
    expect(isValidIdDoc("123456789", 123, "dni")).toBe(false);
    expect(isValidIdDoc("123456789", "ES", 123)).toBe(false);
  });

  it("should return false for an unsupported country", () => {
    expect(isValidIdDoc("123456789", "ZZ", "passport")).toBe(false);
  });

  it("should return false for an unsupported ID document type", () => {
    expect(isValidIdDoc("123456789", "ES", "invalidType")).toBe(false);
  });

  it("should return true for a valid id document", () => {
    expect(isValidIdDoc("47008288Z", "ES", "dni")).toBe(true);
  });

  it("should return true for a valid id document without specifying the type", () => {
    expect(isValidIdDoc("47008288Z", "ES")).toBe(true);
    expect(isValidIdDoc("Y4731627N", "ES")).toBe(true);
    expect(isValidIdDoc("paa333388", "ES")).toBe(true);
  });

  it("should return false for a valid id document with a wrong country specified", () => {
    expect(isValidIdDoc("47008288Z", "FR")).toBe(false);
  });

  it("should return true for a valid gic from DE", () => {
    expect(isValidIdDoc("l12341234", "DE", "gic")).toBe(true);
  });

  it("should return true for a valid passport from DE", () => {
    expect(isValidIdDoc("c123CFG45", "DE", "passport")).toBe(true);
  });

  it("should return true for a valid dni from ES", () => {
    expect(isValidIdDoc("47008288Z", "ES", "dni")).toBe(true);
  });

  it("should return true for a valid nie from ES", () => {
    expect(isValidIdDoc("Y4731627N", "ES", "nie")).toBe(true);
  });

  it("should return true for a valid passport from ES", () => {
    expect(isValidIdDoc("paa333388", "ES", "passport")).toBe(true);
  });

  it("should return true for a valid cni from FR", () => {
    expect(isValidIdDoc("123456789012", "FR", "cni")).toBe(true);
  });

  it("should return true for a valid passport from FR", () => {
    expect(isValidIdDoc("12AB34567", "FR", "passport")).toBe(true);
  });

  it("should return true for a valid cf from IT", () => {
    expect(isValidIdDoc("SCRGZL98R27H501I", "IT", "cf")).toBe(true);
  });

  it("should return true for a valid passport from IT", () => {
    expect(isValidIdDoc("AA1234567", "IT", "passport")).toBe(true);
  });

  it("should return true for a valid cc from PT", () => {
    expect(isValidIdDoc("12345678 9 ZA1", "PT", "cc")).toBe(true);
  });

  it("should return true for a valid nif from PT", () => {
    expect(isValidIdDoc("123456789", "PT", "nif")).toBe(true);
  });

  it("should return true for a valid passport from PT", () => {
    expect(isValidIdDoc("P123456", "PT", "passport")).toBe(true);
  });

  it("should return true for a valid passport from AT", () => {
    expect(isValidIdDoc("A1234567", "AT", "passport")).toBe(true);
  });

  it("should return true for a valid passport from BE", () => {
    expect(isValidIdDoc("KK1234567", "BE", "passport")).toBe(true);
  });

  it("should return true for a valid passport from BG", () => {
    expect(isValidIdDoc("123456789", "BG", "passport")).toBe(true);
  });

  it("should return true for a valid passport from HR", () => {
    expect(isValidIdDoc("123456789", "HR", "passport")).toBe(true);
  });

  it("should return true for a valid passport from CY", () => {
    expect(isValidIdDoc("A1234567", "CY", "passport")).toBe(true);
  });

  it("should return true for a valid passport from CZ", () => {
    expect(isValidIdDoc("12345678", "CZ", "passport")).toBe(true);
  });

  it("should return true for a valid passport from DK", () => {
    expect(isValidIdDoc("123456789", "DK", "passport")).toBe(true);
  });

  it("should return true for a valid passport from EE", () => {
    expect(isValidIdDoc("AA1234567", "EE", "passport")).toBe(true);
  });

  it("should return true for a valid passport from FI", () => {
    expect(isValidIdDoc("AA1234567", "FI", "passport")).toBe(true);
  });

  it("should return true for a valid passport from GR", () => {
    expect(isValidIdDoc("AA1234567", "GR", "passport")).toBe(true);
  });

  it("should return true for a valid passport from HU", () => {
    expect(isValidIdDoc("AB123456", "HU", "passport")).toBe(true);
  });

  it("should return true for a valid passport from IE", () => {
    expect(isValidIdDoc("PA1234567", "IE", "passport")).toBe(true);
  });

  it("should return true for a valid passport from LV", () => {
    expect(isValidIdDoc("AA1234567", "LV", "passport")).toBe(true);
  });
});

describe("isValidVat", () => {
  it("should return true for a valid VAT from a supported country", () => {
    expect(isValidVat("ATU12345678")).toBe(true);
    expect(isValidVat("BE03-1234-1234")).toBe(true);
    expect(isValidVat("BG123456789")).toBe(true);
    expect(isValidVat("CY12345678Z")).toBe(true);
    expect(isValidVat("CZ12345678")).toBe(true);
    expect(isValidVat("DE12345678901")).toBe(true);
    expect(isValidVat("DK12345678")).toBe(true);
    expect(isValidVat("EE123456789")).toBe(true);
    expect(isValidVat("EL123456789")).toBe(true);
    expect(isValidVat("ES47008288Z")).toBe(true);
    expect(isValidVat("FI12345672")).toBe(true);
    expect(isValidVat("FR12345678901")).toBe(true);
    expect(isValidVat("HR12345678901")).toBe(true);
    expect(isValidVat("HU12345678")).toBe(true);
    expect(isValidVat("IE1234567X")).toBe(true);
    expect(isValidVat("IT.07643520567")).toBe(true);
    expect(isValidVat("LV12345678901")).toBe(true);
    expect(isValidVat("PT123456789")).toBe(true);
  });
});

describe("isValidViesVat", () => {
  it("should return an object with isValid true if the request didn't fail for a valid VAT", async () => {
    const { isValid, userError, vatNumber } = await isValidViesVat(
      "W0184081H",
      "ES"
    );
    if (userError === "VALID") {
      expect(isValid).toBe(true);
    } else {
      expect(isValid).toBe(false);
    }
    expect(vatNumber).toBe("W0184081H");
  }, 30000);

  it("should return an object with isValid true if the request didn't fail for a valid VAT with country code", async () => {
    const { isValid, userError, vatNumber } = await isValidViesVat(
      "ESW0184081H",
      "ES"
    );
    if (userError === "VALID") {
      expect(isValid).toBe(true);
    } else {
      expect(isValid).toBe(false);
    }
    expect(vatNumber).toBe("W0184081H");
  }, 30000);

  it("should return an object with isValid false for an invalid VAT", async () => {
    const { isValid } = await isValidViesVat("W018408", "ES");
    expect(isValid).toBe(false);
  }, 30000);
});

describe("supportedCountries", () => {
  it("should return an array of strings with the supported countries", () => {
    expect(Array.isArray(supportedCountriesIdDoc())).toBe(true);
    expect(supportedCountriesIdDoc()).toContain("ES");
    expect(supportedCountriesIdDoc()).toContain("FR");
  });
});

describe("supportedCountriesVat", () => {
  it("should return an array of strings with the supported countries", () => {
    expect(Array.isArray(supportedCountriesVat())).toBe(true);
    expect(supportedCountriesVat()).toContain("ES");
    expect(supportedCountriesVat()).toContain("FR");
  });
});

describe("supportedIdDocsByCountry", () => {
  it("should return an array of supported id docs for a country", () => {
    expect(Array.isArray(supportedIdDocsByCountry("ES"))).toBe(true);
    expect(supportedIdDocsByCountry("ES")).toContain("dni");
    expect(supportedIdDocsByCountry("ES")).toContain("nie");
    expect(supportedIdDocsByCountry("ES")).toContain("passport");
  });
});
