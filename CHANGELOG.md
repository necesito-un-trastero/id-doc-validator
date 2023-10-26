# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.5] - 2023-10-26

### Added

### Fixed

### Changed

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
