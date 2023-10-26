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

## How to Use

To validate personal identification documents, use the `isValidIdDoc` function. It takes three parameters:

- `idDoc` (string): The identification document number to validate.
- `country` (string): The country code (e.g., "ES" for Spain, "FR" for France).
- `idDocType` (string): The type of identification document to validate.

### Example Usage:

```javascript
const idDoc = "your_identification_number";
const country = "ES"; // Country code
const idDocType = "DNI"; // Type of identification document

const isValid = isValidIdDoc(idDoc, country, idDocType);

if (isValid) {
  console.log("The identification document is valid.");
} else {
  console.log("The identification document is not valid.");
}
