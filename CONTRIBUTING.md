# Contributing to WorkCanvas Studio

Thank you for helping make browser workflow automation easier to reproduce.

## Good contributions

- Accessible control samples using labels and ARIA roles
- Popup, grid, date, upload, and dynamic-row patterns
- Equivalent workflows implemented in another web framework
- Browser tests that verify postconditions instead of clicks alone
- Documentation and accessibility improvements

## Requirements

1. Use only synthetic names, URLs, codes, and records.
2. Do not include screenshots, logs, credentials, or copied production markup.
3. Keep each sample small and understandable.
4. Add or update a Playwright/Vitest regression test.
5. Run `npm test`, `npm run typecheck`, and `npm audit` before submitting.

## Pull requests

Describe the workflow pattern, the expected postcondition, and why existing samples do not cover it. Keep framework-specific implementation inside its sample directory.
