const { default: axios } = require("axios");
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
  validateVatDK,
  validatePassportDK,
} = require("./country_validations/dk");
const {
  validateVatEE,
  validatePassportEE,
} = require("./country_validations/ee");
const {
  validateNifES,
  validateNieES,
  validatePassportES,
  validateVatES,
} = require("./country_validations/es");
const {
  validateVatFI,
  validatePassportFI,
} = require("./country_validations/fi");
const {
  validateCniFR,
  validatePassportFR,
  validateVatFR,
} = require("./country_validations/fr");
const {
  validateVatGR,
  validatePassportGR,
} = require("./country_validations/gr");
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
const {
  validateVatHU,
  validatePassportHU,
} = require("./country_validations/hu");
const {
  validateVatIE,
  validatePassportIE,
} = require("./country_validations/ie");

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

const isValidEUVat = async (vatNumber, countryCode) => {
  const viesApiEndpoint =
    "https://ec.europa.eu/taxation_customs/vies/rest-api/ms/" +
    countryCode +
    "/vat/" +
    vatNumber;

  try {
    const response = await axios.get(viesApiEndpoint);
    const { isValid, userError, vatNumber } = response.data;
    return {
      isValid,
      userError,
      vatNumber,
    };
  } catch (error) {
    return {
      isValid: false,
      requestError: error.message,
      vatNumber,
    };
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
  DK: {
    passport: validatePassportDK,
    vat: validateVatDK,
  },
  EE: {
    passport: validatePassportEE,
    vat: validateVatEE,
  },
  ES: {
    dni: validateNifES,
    nif: validateNifES,
    nie: validateNieES,
    passport: validatePassportES,
    vat: validateVatES,
  },
  FI: {
    passport: validatePassportFI,
    vat: validateVatFI,
  },
  FR: {
    cni: validateCniFR,
    passport: validatePassportFR,
    vat: validateVatFR,
  },
  GR: {
    passport: validatePassportGR,
    vat: validateVatGR,
  },
  HR: {
    passport: validatePassportHR,
    vat: validateVatHR,
  },
  HU: {
    passport: validatePassportHU,
    vat: validateVatHU,
  },
  IE: {
    passport: validatePassportIE,
    vat: validateVatIE,
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
  isValidEUVat,
  isValidIdDoc,
};
