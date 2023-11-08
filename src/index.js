const {
  validatePassportAT,
  validateVatAT,
} = require("./country_validations/at");
const {
  validatePassportBE,
  validateVatBE,
} = require("./country_validations/be");
const {
  validatePassportBG,
  validateVatBG,
} = require("./country_validations/bg");
const {
  validateVatCY,
  validatePassportCY,
} = require("./country_validations/cy");
const {
  validatePassportCZ,
  validateVatCZ,
} = require("./country_validations/cz");
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
const {
  validatePassportHR,
  validateVatHR,
} = require("./country_validations/hr");
const {
  validateCfIT,
  validatePassportIT,
  validateVatIT,
} = require("./country_validations/it");
const {
  validateCcPT,
  validateNifPT,
  validatePassportPT,
  validateVatPT,
} = require("./country_validations/pt");

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
      supportedIdDocTypes[country]
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

const supportedIdDocTypes = {
  AT: {
    passport: validatePassportAT,
    vat: validateVatAT,
  },
  BE: {
    passport: validatePassportBE,
    vat: validateVatBE,
  },
  BG: {
    passport: validatePassportBG,
    vat: validateVatBG,
  },
  CY: {
    passport: validatePassportCY,
    vat: validateVatCY,
  },
  CZ: {
    passport: validatePassportCZ,
    vat: validateVatCZ,
  },
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
  HR: {
    passport: validatePassportHR,
    vat: validateVatHR,
  },
  IT: {
    cf: validateCfIT,
    passport: validatePassportIT,
    vat: validateVatIT,
  },
  PT: {
    cc: validateCcPT,
    nif: validateNifPT,
    passport: validatePassportPT,
    vat: validateVatPT,
  },
};

const supportedCountries = Object.keys(supportedIdDocTypes);

module.exports = {
  isValidIdDoc,
};
