const { validateDniES } = require("../../country_validations/es");

describe("validateDniES", () => {
  it("should return true for valid DNI", () => {
    expect(validateDniES("92400040R")).toBe(true);
    expect(validateDniES("47008288z")).toBe(true);
    expect(validateDniES("01899814Z")).toBe(true);
  });

  it("should return false for invalid DNI", () => {
    expect(validateDniES("1234")).toBe(false);
    expect(validateDniES("12345678")).toBe(false);
    expect(validateDniES("12345678X1")).toBe(false);
    expect(validateDniES("12345678-X")).toBe(false);
  });

  it("should return false for invalid checksum", () => {
    expect(validateDniES("47008288a")).toBe(false);
    expect(validateDniES("92400040A")).toBe(false);
  });
});
