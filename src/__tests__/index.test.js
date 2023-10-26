const { isValidIdDoc } = require("..");

describe("isValidIdDoc", () => {
  it("should return false for missing parameters", () => {
    expect(isValidIdDoc()).toBe(false);
    expect(isValidIdDoc("123456789")).toBe(false);
    expect(isValidIdDoc("123456789", "ES")).toBe(false)
    expect(isValidIdDoc("123456789", "ES", "")).toBe(false);
  });

  it("should return false for invalid parameters", () => {
    expect(isValidIdDoc(123456789, "ES", "dni")).toBe(false)
    expect(isValidIdDoc("123456789", 123, "dni")).toBe(false)
    expect(isValidIdDoc("123456789", "ES", 123)).toBe(false)
  });

  it("should return false for an unsupported country", () => {
    expect(isValidIdDoc("123456789", "ZZ", "passport")).toBe(false)
  });

  it("should return false for an unsupported ID document type", () => {
    expect(isValidIdDoc("123456789", "ES", "invalidType")).toBe(false)
  });

  it("should return true for a valid id document", () => {
    expect(isValidIdDoc("47008288Z", "ES", "dni")).toBe(true);
  });
});
