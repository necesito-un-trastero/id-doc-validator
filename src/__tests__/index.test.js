const { isValidIdDoc } = require("..");

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
});
