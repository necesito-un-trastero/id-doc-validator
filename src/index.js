const {
  validateDniES,
  validateNifES,
  validateNieES,
  validatePassportES,
} = require("./country_validations/es");

const isValidIdDoc = (idDoc, country, idDocType) => {
  if (!idDoc || !country || !idDocType) {
    throw new Error("Missing parameters");
  }

  if (
    typeof idDoc !== "string" ||
    typeof country !== "string" ||
    typeof idDocType !== "string"
  ) {
    throw new Error("Invalid parameters");
  }

  country = country.toUpperCase();
  idDocType = idDocType.toLowerCase();

  if (!supportedCountries.includes(country)) {
    throw new Error(
      `Country ${country} is not supported. Currently supported countries are: ${supportedCountries}`,
    );
  }

  if (!supportedIdDocTypes[country]?.[idDocType]) {
    throw new Error(
      `IdDocType ${idDocType} is not supported for country ${country}. Supported types are: ${Object.keys(
        supportedIdDocTypes[country],
      )}`,
    );
  }

  return supportedIdDocTypes[country][idDocType](idDoc);
};

const supportedCountries = ["ES"];

const supportedIdDocTypes = {
  ES: {
    dni: validateDniES,
    nif: validateNifES,
    nie: validateNieES,
    passport: validatePassportES,
  },
};

module.exports = {
  isValidIdDoc,
};
