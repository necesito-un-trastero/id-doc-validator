# id-doc-validator

A validator for different types of personal ID for multiple countries.

## Supported Countries

<details>
<summary><strong>Spain (ES)</strong></summary>

  - DNI (Documento Nacional de Identidad)
  - NIF (Número de Identificación Fiscal)
  - NIE (Número de Identificación de Extranjero)
  - Passport
  - VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>France (FR)</strong></summary>

  - CNI (Carte Nationale d'Identité)
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
- `idDocType` (string): The type of identification document to validate.  For a list of supported identification document types, please refer to the expanded view of the [**Supported Countries** section](#supported-countries)

### Example Usage:

```javascript
// Import the id-doc-validator library
const { isValidIdDoc } = require('id-doc-validator');

const idDoc = "your_identification_number";
const country = "ES"; // Country code
const idDocType = "DNI"; // Type of identification document

const isValid = isValidIdDoc(idDoc, country, idDocType);

if (isValid) {
  console.log("The identification document is valid.");
} else {
  console.log("The identification document is not valid.");
}
