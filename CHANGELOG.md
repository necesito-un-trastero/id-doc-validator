# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.4] - 2023-11-15

### Added

### Fixed

- Fixed checksum check for Finnish VAT number.

### Changed

### Removed

## [0.6.3] - 2023-11-15

### Added

### Fixed

- Fixed checksum check for Luhn algorithm.

### Changed

### Removed

## [0.6.2] - 2023-11-15

### Added

### Fixed

- Fixed checksum validation for some NIFs in Spain.

### Changed

### Removed

## [0.6.1] - 2023-11-15

### Added

### Fixed

- Fixed VAT number validation for Germany.

### Changed

### Removed

## [0.6.0] - 2023-11-15

### Added

### Fixed

- Fixed check digit/number validation for Spanish NIF/CIF.

### Changed

### Removed

## [0.5.9] - 2023-11-14

### Added

### Fixed

- Added company NIF validation for Spain (previously CIF).

### Changed

- Update README.md to add clarification that VAT is is validated with `isValidVat`, not `isValidIdDoc`.

### Removed

## [0.5.8] - 2023-11-13

### Added

### Fixed

- Fixed error in README.md in `supportedCountriesVat` function.

### Changed

- Change `supportedCountries` to `supportedCountriesIdDoc`.
- Update README.md with updated function name.

### Removed

## [0.5.7] - 2023-11-13

### Added

- Add `isValidVat` and `supportedCountriesVat` functions.

### Fixed

### Changed

- Change `isValidEUVat` to `isValidViesVat`
- Remove "vat" as an id doc type for `isValidIdDoc` function.
- Updated README.md to include information about the new functions.

### Removed

- Removed examples from README.md.

## [0.5.6] - 2023-11-13

### Added

### Fixed

- Add `supportedCountries` and `supportedIdDocsByCountry` functions.

### Changed

- Updated README.md to include information about the new functions.

### Removed

## [0.5.5] - 2023-11-09

### Added

### Fixed

- Fixed main entry point in package.json.

### Changed

### Removed

## [0.5.3] - 2023-11-09

### Added

- Added support for VAT and passport number for the following country: Latvia.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.5.2] - 2023-11-09

### Added

- Added support for VAT and passport number for the following country: Ireland.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.5.1] - 2023-11-09

### Added

- Added support for VAT and passport number for the following country: Hungary.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.5.0] - 2023-11-08

### Added

- Added support for VAT and passport number for the following country: Greece.
- Added a new function to check the validity of VAT numbers for EU countries using the VIES API: `isValidEUVat`.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.
- Updated README.md with new function `isValidEUVat`.

### Removed

## [0.4.9] - 2023-11-08

### Added

- Added support for VAT (with checksum validation) and passport number for the following country: Finland.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.8] - 2023-11-08

### Added

- Added support for VAT and passport number for the following country: Estonia.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.7] - 2023-11-08

### Added

- Added support for VAT and passport number for the following country: Denmark.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.6] - 2023-11-08

### Added

- Added support for VAT and passport number for the following country: Czech Republic.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.5] - 2023-11-07

### Added

- Added support for VAT and passport number for the following country: Republic of Cyprus.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.4] - 2023-11-07

### Added

- Added support for VAT and passport number for the following country: Croatia.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.3] - 2023-11-07

### Added

- Added support for VAT and passport number for the following country: Bulgaria.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.2] - 2023-11-07

### Added

- Added support for VAT and passport number for the following country: Belgium.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.1] - 2023-11-07

### Added

- Added support for VAT and passport number for the following country: Austria

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.4.0] - 2023-11-02

### Added

- Added support for Portuguese: Citizen Card (Cartão de Cidadão), NIF (Número de Identificação Fiscal) VAT and Passport validation.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.3.0] - 2023-10-27

### Added

- Added support for Italian: Fiscal Code (Codice Fiscale), VAT and Passport validation.

### Fixed

- Error when validating DE id documents.

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.2.0] - 2023-10-26

### Added

- Added support for German: Identity Card, VAT and Passport validation.

### Fixed

### Changed

- Updated README.md with new supported countries and identification document types.

### Removed

## [0.1.4] - 2023-10-26

### Fixed

- Error when validating FR id documents.

### Changed

- If the last parameter is not passed, isValidIdDoc checks if the passed id doc is valid for any of the supported id docs for the country.
- Update README with optional last parameter in isValidIdDoc.

## [0.1.3] - 2023-10-26

### Added

- Added support for French VAT (Value Added Tax ID) validation.
- Added support for French Passport validation.
- Added support for French CNI (Carte Nationale d'Identité) validation.
- Added CHANGELOG.md.

### Changed

- Updated README.md with new supported countries and identification document types.
