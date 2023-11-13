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
const {
  validateVatLV,
  validatePassportLV,
} = require("./country_validations/lv");

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

  if (!supportedCountriesIdDoc().includes(country)) {
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

const isValidVat = (vatNumber) => {
  if (!vatNumber || typeof vatNumber !== "string") {
    return false;
  }

  const vatCountryCode = vatNumber.slice(0, 2).toUpperCase();

  if (!supportedCountriesVat().includes(vatCountryCode)) {
    return false;
  }

  return supportedCountriesVatMap[vatCountryCode](vatNumber);
};

const isValidViesVat = async (vatNumber, countryCode) => {
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

const supportedIdDocsByCountry = (country) => {
  if (!supportedCountriesIdDoc().includes(country)) {
    return [];
  }

  return Object.keys(supportedIdDocTypes[country]);
};

const supportedIdDocTypes = {
  AT: {
    passport: validatePassportAT,
  },
  BE: {
    passport: validatePassportBE,
  },
  BG: {
    passport: validatePassportBG,
  },
  CY: {
    passport: validatePassportCY,
  },
  CZ: {
    passport: validatePassportCZ,
  },
  DE: {
    gic: validateGicDE,
    passport: validatePassportDE,
  },
  DK: {
    passport: validatePassportDK,
  },
  EE: {
    passport: validatePassportEE,
  },
  ES: {
    dni: validateNifES,
    nif: validateNifES,
    nie: validateNieES,
    passport: validatePassportES,
  },
  FI: {
    passport: validatePassportFI,
  },
  FR: {
    cni: validateCniFR,
    passport: validatePassportFR,
  },
  GR: {
    passport: validatePassportGR,
  },
  HR: {
    passport: validatePassportHR,
  },
  HU: {
    passport: validatePassportHU,
  },
  IE: {
    passport: validatePassportIE,
  },
  IT: {
    cf: validateCfIT,
    passport: validatePassportIT,
  },
  LV: {
    passport: validatePassportLV,
  },
  PT: {
    cc: validateCcPT,
    nif: validateNifPT,
    passport: validatePassportPT,
  },
};

const supportedCountriesVatMap = {
  AT: validateVatAT,
  BE: validateVatBE,
  BG: validateVatBG,
  CY: validateVatCY,
  CZ: validateVatCZ,
  DE: validateVatDE,
  DK: validateVatDK,
  EE: validateVatEE,
  ES: validateVatES,
  FI: validateVatFI,
  FR: validateVatFR,
  EL: validateVatGR,
  HR: validateVatHR,
  HU: validateVatHU,
  IE: validateVatIE,
  IT: validateVatIT,
  LV: validateVatLV,
  PT: validateVatPT,
};

const supportedCountriesIdDoc = () => Object.keys(supportedIdDocTypes);

const supportedCountriesVat = () => Object.keys(supportedCountriesVatMap);

module.exports = {
  isValidVat,
  isValidViesVat,
  isValidIdDoc,
  supportedCountriesIdDoc,
  supportedIdDocsByCountry,
  supportedCountriesVat,
};
