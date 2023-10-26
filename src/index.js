const {
  validateGicDE,
  validatePassportDE,
  validateVatDE,
} = require("./country_validations/de");
const {
  validateNifES,
  validateNieES,
  validatePassportES,
  validateVatES,
} = require("./country_validations/es");
const {
  validateCniFR,
  validatePassportFR,
  validateVatFR,
} = require("./country_validations/fr");

const isValidIdDoc = (idDoc, country, idDocType = "") => {
  if (!idDoc || !country) {
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

  if (idDocType !== "" && !supportedIdDocTypes[country]?.[idDocType]) {
    return false;
  }

  if (idDocType === "") {
    // Try to validate the ID document as any of the supported types
    for (const [idDocType, validator] of Object.entries(
      supportedIdDocTypes[country],
    )) {
      if (validator(idDoc)) {
        return true;
      }
    }
    return false;
  } else {
    return supportedIdDocTypes[country][idDocType](idDoc);
  }
};

const supportedCountries = ["ES", "FR"];

const supportedIdDocTypes = {
  DE: {
    gic: validateGicDE,
    passport: validatePassportDE,
    vat: validateVatDE,
  },
  ES: {
    dni: validateNifES,
    nif: validateNifES,
    nie: validateNieES,
    passport: validatePassportES,
    vat: validateVatES,
  },
  FR: {
    cni: validateCniFR,
    passport: validatePassportFR,
    vat: validateVatFR,
  },
};

module.exports = {
  isValidIdDoc,
};
