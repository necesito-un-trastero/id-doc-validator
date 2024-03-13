# id-doc-validator

A validator for different types of personal, entity and VAT IDs for multiple countries.

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
<summary><strong>Brazil (BR)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Bulgaria (BG)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Canada (CA)</strong></summary>

- Passport

</details>

<details>
<summary><strong>Colombia (CO)</strong></summary>

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
- VAT (Value Added Tax ID) (country code: EL)

</details>

<details>
<summary><strong>Hungary (HU)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Ireland (IE)</strong></summary>

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
<summary><strong>Lithuania (LT)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Latvia (LV)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Luxembourg (LU)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Malta (MT)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Mexico (MX)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Netherlands (NL)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Poland (PL)</strong></summary>

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

<details>
<summary><strong>Republic of Cyprus (CY)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Romania (RO)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Spain (ES)</strong></summary>

- DNI/NIF (Documento Nacional de Identidad / Número de Identificación Fiscal)
- NIE (Número de Identificación de Extranjero)
- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Slovakia (SK)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>Slovenia (SL)</strong></summary>

- Passport
- VAT (Value Added Tax ID) (country code: SI)

</details>

<details>
<summary><strong>Sweden (SE)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>United Kingdom (GB)</strong></summary>

- Passport
- VAT (Value Added Tax ID)

</details>

<details>
<summary><strong>United States (US)</strong></summary>

- Passport

</details>

## Installation

To use the `id-doc-validator` library in your project, you can install it via npm or yarn:

```bash
npm install id-doc-validator
# OR
yarn add id-doc-validator
```

## How to Use

### `isValidIdDoc`

To validate personal identification documents, use the `isValidIdDoc` function. It takes three parameters:

- `idDoc` (string): The identification document number to validate.
- `country` (string): The alpha-2 country code following ISO 3166-1 (e.g., "ES" for Spain, "FR" for France).
- `idDocType` (string, optional): The type of identification document to validate. For a list of supported identification document types, please refer to the expanded view of the [**Supported Countries**](#supported-countries) (to validate VAT, use [`isValidVat`](#isvalidvat)). If this parameter is not passed, the function will check if the passed id doc is valid for any of the supported id docs for the country.

### `isValidVat`

To validate any VAT number from the list of [**Supported Countries**](#supported-countries), use the `isValidVat` function. It takes one parameter:

- `vatNumber` (string): The VAT number to validate. Should include the VAT country code. In most cases it coincides with the alpha-2 country code, with some exceptions (e.g., "EL" for Greece instead of "GR").

### `isValidViesVat`

To validate a VAT number for an EU member state, use the `isValidViesVat` function. This function uses the API provided by the European Commission to validate the VAT number. It takes two parameters:

- `vatNumber` (string): The VAT number to validate. Should not include the country code.
- `countryCode` (string): The alpha-2 country code following ISO 3166-1 (e.g., "ES" for Spain, "FR" for France).

It returns an object with the following properties:

- `isValid` (boolean): Whether the VAT number is valid or not.
- `userError` (boolean): The error returned by the VIES API. If the request was successful, it will equal 'VALID' or 'INVALID'. If the request was not successful, it will return a string with the error code.
- `vatNumber` (string): The VAT number actually validated. For example, if the passed VAT number is "ES12345678", the returned VAT number will be "12345678", without the country code.

Please note that the VIES API is very limited in the number of requests it can handle. Please use moderately and expect the service to be unavailable at times.

### `supportedIdDocsByCountry`

To get a list of supported identification documents for a country, use the `supportedIdDocsByCountry` function. It takes one parameter:

- `country` (string): The alpha-2 country code following ISO 3166-1 (e.g., "ES" for Spain, "FR" for France).

It returns an array of strings with the supported identification documents for the country.

### `supportedCountriesIdDoc`

To get a list of supported countries for identification documents (not VAT), use the `supportedCountriesIdDoc` function. It takes no parameters.

It returns an array of strings with the supported countries.

### `supportedCountriesVat`

To get a list of supported countries for VAT validation, use the `supportedCountriesVat` function. It takes no parameters.

It returns an array of strings with the supported VAT country codes for VAT validation.

## Resources

- [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
- [Consilium Europa - Check Document numbers](https://www.consilium.europa.eu/prado/en/check-document-numbers/check-document-numbers.pdf)
- [VIES VAT number validation](https://ec.europa.eu/taxation_customs/vies/#/vat-validation)
