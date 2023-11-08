# id-doc-validator

A validator for different types of personal, entity and VAT ID for multiple countries.

## Supported Countries

<details>
<summary><strong>Austria (AT)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Belgium (BE)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Bulgaria (BG)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Czech Republic (CZ)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Croatia (HR)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Denmark (DK)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Estonia (EE)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Finland (FI)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>France (FR)</strong></summary>

- CNI (Carte Nationale d'Identité)
- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Germany (DE)</strong></summary>

- GIC (German Identity Card)
- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Greece (GR)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Italy (IT)</strong></summary>

- CF (Codice Fiscale)
- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Republic of Cyprus (CY)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Spain (ES)</strong></summary>

- DNI (Documento Nacional de Identidad)
- NIF (Número de Identificación Fiscal)
- NIE (Número de Identificación de Extranjero)
- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Portugal (PT)</strong></summary>

- CC (Cartão de Cidadão)
- NIF (Número de Identificação Fiscal)
- Passport
- VAT (Value Added Tax ID)

</details>

## Installation

To use the `id-doc-validator` library in your project, you can install it via npm or yarn:

```bash
npm install id-doc-validator
# OR
yarn add id-doc-validator
```

## How to Use

To validate personal identification documents, use the `isValidIdDoc` function. It takes three parameters:

- `idDoc` (string): The identification document number to validate.
- `country` (string): The alpha-2 country code following ISO 3166-1 (e.g., "ES" for Spain, "FR" for France).
- `idDocType` (string, optional): The type of identification document to validate. For a list of supported identification document types, please refer to the expanded view of the [**Supported Countries**](#supported-countries). If this parameter is not passed, the function will check if the passed id doc is valid for any of the supported id docs for the country.

### Example Usage:

```javascript
// Import the id-doc-validator library
const { isValidIdDoc } = require("id-doc-validator");

const idDoc = "your_identification_number";
const country = "ES"; // Country code
const idDocType = "DNI"; // Type of identification document

const isValid = isValidIdDoc(idDoc, country, idDocType);

if (isValid) {
  console.log("The identification document is valid.");
} else {
  console.log("The identification document is not valid.");
}
```

To validate a VAT number for an EU member state, use the `isValidEUVat` function. This function uses the API provided by the European Commission to validate the VAT number. It takes two parameters:

- `vatNumber` (string): The VAT number to validate. Should not include the country code.
- `countryCode` (string): The alpha-2 country code following ISO 3166-1 (e.g., "ES" for Spain, "FR" for France).

It returns an object with the following properties:

- `isValid` (boolean): Whether the VAT number is valid or not.
- `userError` (boolean): The error returned by the VIES API. If the request was successful, it will equal 'VALID' or 'INVALID'. If the request was not successful, it will return a string with the error code.
- `vatNumber` (string): The VAT number actually validated. For example, if the passed VAT number is "ES12345678", the returned VAT number will be "12345678", without the country code.

Please note that the VIES API is very limited in the number of requests it can handle. Please use moderately and expect the service to be unavailable at times.

### Example Usage:

```javascript
// Import the id-doc-validator library
const { isValidEUVat } = require("id-doc-validator");

const vatNumberToCheck = "your_vat_number";
const countryCode = "CC"; // Country code

const { isValid, userError, vatNumber } = await isValidEUVat(
  vatNumberToCheck,
  countryCode
);

if (isValid) {
  console.log("The VAT number is valid.");
} else {
  if (userError === "INVALID") console.log("The VAT number is not valid.");
  else console.log("There was an error validating the VAT number.");
}
```

## Resources

- [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
- [Consilium Europa - Check Document numbers](https://www.consilium.europa.eu/prado/en/check-document-numbers/check-document-numbers.pdf)
- [VIES VAT number validation](https://ec.europa.eu/taxation_customs/vies/#/vat-validation)
