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

## Resources

- [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
- [Consilium Europa - Check Document numbers](https://www.consilium.europa.eu/prado/en/check-document-numbers/check-document-numbers.pdf)
