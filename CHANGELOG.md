# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2023-11-07

### Added

- Added support for VAT and passport number for the following countries (no check digit calculation is currently performed for any of these countries, it will be added in the future): Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, Greece, Hungary, Ireland, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Romania, Slovakia, Slovenia and Sweden.

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
