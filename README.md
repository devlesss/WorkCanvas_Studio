# WorkCanvas Studio

WorkCanvas Studio is a public, framework-neutral collection of browser-control samples for workflow learning and automation experiments.

This repository contains only standard HTML and React examples. It contains no vendor-specific ERP adapter, private workflow data, credentials, execution logs, or learned production memory.

## Included samples

- Standard HTML: form controls, semantic dialog, query results, row addition
- React: controlled inputs, modal selection, and detail rows
- Playwright/Vitest smoke tests for both pages

## Run locally

```bash
npm install
npm run build:react
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Test

Install the Playwright browser once, then run the tests:

```bash
npx playwright install chromium
npm test
```

## Security

Never commit real ERP URLs, credentials, workflow plans, screenshots, downloads, logs, or learned memory. Use synthetic values in all public examples.

## License

MIT
