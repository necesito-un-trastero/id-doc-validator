const {
  validateNifES,
  validateNieES,
  validatePassportES,
  validateVatES,
} = require("./country_validations/es");

const isValidIdDoc = (idDoc, country, idDocType) => {
  if (!idDoc || !country || !idDocType) {
    return false;
  }

  if (
    typeof idDoc !== "string" ||
    typeof country !== "string" ||
    typeof idDocType !== "string"
  ) {
    return false;
  }

  country = country.toUpperCase();
  idDocType = idDocType.toLowerCase();

  if (!supportedCountries.includes(country)) {
    return false;
  }

  if (!supportedIdDocTypes[country]?.[idDocType]) {
    return false
  }

  return supportedIdDocTypes[country][idDocType](idDoc);
};

const supportedCountries = ["ES", "FR"];

const supportedIdDocTypes = {
  ES: {
    dni: validateNifES,
    nif: validateNifES,
    nie: validateNieES,
    passport: validatePassportES,
    vat: validateVatES,
  },
  FR: {
    cni: "",
    passport: "",
    vat: ""
  }
};

module.exports = {
  isValidIdDoc,
};
