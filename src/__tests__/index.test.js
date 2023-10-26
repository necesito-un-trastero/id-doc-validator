const { isValidIdDoc } = require("..");

describe("isValidIdDoc", () => {
  it("should throw an error for missing parameters", () => {
    expect(() => isValidIdDoc()).toThrow("Missing parameters");
    expect(() => isValidIdDoc("123456789")).toThrow("Missing parameters");
    expect(() => isValidIdDoc("123456789", "ES")).toThrow("Missing parameters");
    expect(() => isValidIdDoc("123456789", "ES", "")).toThrow(
      "Missing parameters",
    );
  });

  it("should throw an error for invalid parameters", () => {
    expect(() => isValidIdDoc(123456789, "ES", "dni")).toThrow(
      "Invalid parameters",
    );
    expect(() => isValidIdDoc("123456789", 123, "dni")).toThrow(
      "Invalid parameters",
    );
    expect(() => isValidIdDoc("123456789", "ES", 123)).toThrow(
      "Invalid parameters",
    );
  });

  it("should throw an error for an unsupported country", () => {
    expect(() => isValidIdDoc("123456789", "ZZ", "passport")).toThrow(
      "Country ZZ is not supported.",
    );
  });

  it("should throw an error for an unsupported ID document type", () => {
    expect(() => isValidIdDoc("123456789", "ES", "invalidType")).toThrow(
      "IdDocType invalidtype is not supported for country ES.",
    );
  });
});
