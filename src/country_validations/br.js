const { testStringAgainstRegex } = require("../utils");

/**
 * This function validates the Brazilian VAT (Value Added Tax) numbers which are Cadastro Nacional de Pessoa Jurídica (CNPJ) and Cadastro de Pessoa Física (CPF).
 * It checks if the input VAT number matches the standard format of CNPJ or CPF.
 * @param {string} vat - The VAT number to be validated.
 * @returns {boolean} - Returns true if the VAT number matches either CNPJ or CPF format, false otherwise.
 * @todo: add check digit validation to enhance the accuracy of the validation.
 */
const validateVatBR = (vat) => {
  const cnpjPattern = /(\d{2})\.?(\d{3})\.?(\d{3})\/?(\d{4})\-?(\d{2})$/;
  const cpfPattern = /(\d{3})\.?(\d{3})\.?(\d{3})\-?(\d{2})$/;

  const vatPattern = new RegExp(
    `^(BR)(${cnpjPattern.source}|${cpfPattern.source})$`
  );

  if (!testStringAgainstRegex(vat, vatPattern)) return false;

  return true;
};

module.exports = {
  validateVatBR,
};
