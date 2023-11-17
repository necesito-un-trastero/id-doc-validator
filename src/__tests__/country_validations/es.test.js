const {
  validateNifES,
  validateNieES,
  validateVatES,
} = require("../../country_validations/es");

describe("validateNifES", () => {
  it("should return true for valid personal DNI/NIF", () => {
    expect(validateNifES("92400040R")).toBe(true);
    expect(validateNifES("47008288z")).toBe(true);
    expect(validateNifES("01899814Z")).toBe(true);
  });

  it("should return true for a valid company NIF", () => {
    expect(validateNifES("A58818501")).toBe(true);
    expect(validateNifES("P0313300F")).toBe(true);
    expect(validateNifES("B23260466")).toBe(true);
    expect(validateNifES("S0602053A")).toBe(true);
    expect(validateNifES("B18927350")).toBe(true);
  });

  it("should return false for invalid DNI/NIF", () => {
    expect(validateNifES("1234")).toBe(false);
    expect(validateNifES("12345678")).toBe(false);
    expect(validateNifES("12345678X1")).toBe(false);
    expect(validateNifES("12345678-X")).toBe(false);
  });

  it("should return false for invalid checksum", () => {
    expect(validateNifES("47008288a")).toBe(false);
    expect(validateNifES("92400040A")).toBe(false);
    expect(validateNifES("B62922601")).toBe(false);
    expect(validateNifES("E07567989")).toBe(false);
  });
});

describe("validateNieES", () => {
  it("should return true for valid NIE", () => {
    expect(validateNieES("Y7227117W")).toBe(true);
    expect(validateNieES("Y4731627N")).toBe(true);
    expect(validateNieES("X9153879V")).toBe(true);
    expect(validateNieES("Z3082433R")).toBe(true);
  });

  it("should return false for invalid NIE", () => {
    expect(validateNieES("12345678")).toBe(false);
    expect(validateNieES("12345678X1")).toBe(false);
    expect(validateNieES("12345678-X")).toBe(false);
    expect(validateNieES("A3082433R")).toBe(false);
    expect(validateNieES("47008288z")).toBe(false);
    expect(validateNieES("Z-3082433-R")).toBe(false);
  });

  it("should return false for invalid checksum", () => {
    expect(validateNieES("Y7227117A")).toBe(false);
    expect(validateNieES("Y4731627A")).toBe(false);
    expect(validateNieES("X9153879A")).toBe(false);
  });
});

describe("validateVatES", () => {
  it("should return true for valid VAT", () => {
    expect(validateVatES("ES47008288Z")).toBe(true);
    expect(validateVatES("ES92400040R")).toBe(true);
    expect(validateVatES("ES01899814Z")).toBe(true);
    expect(validateVatES("ES01931312W")).toBe(true);
    expect(validateVatES("ESB19662295")).toBe(true);
    expect(validateVatES("ESA58818501")).toBe(true);
    expect(validateVatES("ESB66446931")).toBe(true);
    expect(validateVatES("ESB64052392")).toBe(true);
    expect(validateVatES("ES08848552S")).toBe(true);
    expect(validateVatES("ESY9334449M")).toBe(true);
    expect(validateVatES("ESX6169075S")).toBe(true);
  });

  it("should return false for invalid VAT", () => {
    expect(validateVatES("ES12345678")).toBe(false);
    expect(validateVatES("ES12345678X1")).toBe(false);
    expect(validateVatES("ES12345678-X")).toBe(false);
    expect(validateVatES("US47008288z")).toBe(false);
    expect(validateVatES("ES-3082433-R")).toBe(false);
    expect(validateVatES("01899814Z")).toBe(false);
  });
});
