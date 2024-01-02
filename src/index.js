const { default: axios } = require("axios");
const { validateVatAT } = require("./country_validations/at");
const { validateVatBE } = require("./country_validations/be");
const { validateVatBG } = require("./country_validations/bg");
const { validateVatCY } = require("./country_validations/cy");
const { validateVatCZ } = require("./country_validations/cz");
const { validateGicDE, validateVatDE } = require("./country_validations/de");
const { validateVatDK } = require("./country_validations/dk");
const { validateVatEE } = require("./country_validations/ee");
const {
  validateNifES,
  validateNieES,
  validateVatES,
} = require("./country_validations/es");
const { validateVatFI } = require("./country_validations/fi");
const { validateCniFR, validateVatFR } = require("./country_validations/fr");
const { validateVatGR } = require("./country_validations/gr");
const { validateVatHR } = require("./country_validations/hr");
const { validateCfIT, validateVatIT } = require("./country_validations/it");
const {
  validateCcPT,
  validateNifPT,
  validateVatPT,
} = require("./country_validations/pt");
const { validateVatHU } = require("./country_validations/hu");
const { validateVatIE } = require("./country_validations/ie");
const { validateVatLV } = require("./country_validations/lv");
const { validateVatLT } = require("./country_validations/lt");
const { validateVatLU } = require("./country_validations/lu");
const { validateVatMT } = require("./country_validations/mt");
const { validateVatNL } = require("./country_validations/nl");
const { validateVatPL } = require("./country_validations/pl");
const { validateVatRO } = require("./country_validations/ro");
const { validateVatSK } = require("./country_validations/sk");
const { validateVatSL } = require("./country_validations/sl");
const { validateVatSE } = require("./country_validations/se");
const { validatePassport } = require("./type_validations/passport");
const { validateVatGB } = require("./country_validations/gb");
const { validateVatMX } = require("./country_validations/mx");

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
    passport: (passport) => validatePassport(passport, "AT"),
  },
  BE: {
    passport: (passport) => validatePassport(passport, "BE"),
  },
  BG: {
    passport: (passport) => validatePassport(passport, "BG"),
  },
  CA: {
    passport: (passport) => validatePassport(passport, "CA"),
  },
  CY: {
    passport: (passport) => validatePassport(passport, "CY"),
  },
  CZ: {
    passport: (passport) => validatePassport(passport, "CZ"),
  },
  DE: {
    gic: validateGicDE,
    passport: (passport) => validatePassport(passport, "DE"),
  },
  DK: {
    passport: (passport) => validatePassport(passport, "DK"),
  },
  EE: {
    passport: (passport) => validatePassport(passport, "EE"),
  },
  ES: {
    dni: validateNifES,
    nif: validateNifES,
    nie: validateNieES,
    passport: (passport) => validatePassport(passport, "ES"),
  },
  FI: {
    passport: (passport) => validatePassport(passport, "FI"),
  },
  FR: {
    cni: validateCniFR,
    passport: (passport) => validatePassport(passport, "FR"),
  },
  GB: {
    passport: (passport) => validatePassport(passport, "GB"),
  },
  GR: {
    passport: (passport) => validatePassport(passport, "GR"),
  },
  HR: {
    passport: (passport) => validatePassport(passport, "HR"),
  },
  HU: {
    passport: (passport) => validatePassport(passport, "HU"),
  },
  IE: {
    passport: (passport) => validatePassport(passport, "IE"),
  },
  IT: {
    cf: validateCfIT,
    passport: (passport) => validatePassport(passport, "IT"),
  },
  LT: {
    passport: (passport) => validatePassport(passport, "LT"),
  },
  LU: {
    passport: (passport) => validatePassport(passport, "LU"),
  },
  LV: {
    passport: (passport) => validatePassport(passport, "LV"),
  },
  MT: {
    passport: (passport) => validatePassport(passport, "MT"),
  },
  MX: {
    passport: (passport) => validatePassport(passport, "MX"),
  },
  NL: {
    passport: (passport) => validatePassport(passport, "NL"),
  },
  PL: {
    passport: (passport) => validatePassport(passport, "PL"),
  },
  PT: {
    cc: validateCcPT,
    nif: validateNifPT,
    passport: (passport) => validatePassport(passport, "PT"),
  },
  RO: {
    passport: (passport) => validatePassport(passport, "RO"),
  },
  SE: {
    passport: (passport) => validatePassport(passport, "SE"),
  },
  SK: {
    passport: (passport) => validatePassport(passport, "SK"),
  },
  SL: {
    passport: (passport) => validatePassport(passport, "SL"),
  },
  US: {
    passport: (passport) => validatePassport(passport, "US"),
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
  EL: validateVatGR,
  ES: validateVatES,
  FI: validateVatFI,
  GB: validateVatGB,
  FR: validateVatFR,
  HR: validateVatHR,
  HU: validateVatHU,
  IE: validateVatIE,
  IT: validateVatIT,
  LT: validateVatLT,
  LU: validateVatLU,
  LV: validateVatLV,
  MT: validateVatMT,
  MX: validateVatMX,
  NL: validateVatNL,
  PL: validateVatPL,
  PT: validateVatPT,
  RO: validateVatRO,
  SE: validateVatSE,
  SI: validateVatSL,
  SK: validateVatSK,
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
