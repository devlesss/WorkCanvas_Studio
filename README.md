# WorkCanvas Studio — Learn Once, Automate Web Workflows

**Reusable browser-control samples for workflow learning, UI automation, and AI agent evaluation.**

WorkCanvas Studio provides realistic Standard HTML and React business screens for building and testing browser automation. The samples cover the controls that commonly break workflow agents: controlled inputs, search dialogs, result selection, date fields, query results, and dynamic grid rows.

## Why WorkCanvas Studio?

Browser agents often succeed on a simple form but fail when the same business action appears in a popup, React state, or a dynamically added row. WorkCanvas Studio gives teams a safe, synthetic environment in which to reproduce those cases without connecting to a production system.

- Learn and replay form-control interactions.
- Compare equivalent workflows across Standard HTML and React.
- Test semantic locators, dialogs, grids, and dynamic rows.
- Build regression tests before applying automation to real business systems.
- Share reproducible failures without exposing private URLs or data.

## Included scenarios

| Sample | Controls and workflow patterns |
| --- | --- |
| Standard HTML inventory inquiry | Selects, date input, radio, checkbox, semantic dialog, query results, row addition |
| React purchase order | Controlled inputs, selects, modal lookup, radio selection, detail-row addition and editing |
| Playwright regression suite | Popup visibility, form state, and exact row-count change verification |

All names, codes, and records are synthetic. This public repository contains no vendor-specific ERP adapter, credentials, execution logs, screenshots, downloads, or learned production memory.

## Quick start

Requirements: Node.js 22 or later.

```bash
git clone <your-repository-url>
cd workcanvas-studio
npm install
npx playwright install chromium
npm run dev
```

Open `http://127.0.0.1:5173/` and choose a sample.

## Test and build

```bash
npm test
npm run typecheck
npm run build
```

`npm test` builds the React sample and runs browser tests against both frameworks.

## Project structure

```text
samples/react/                 React source
web/samples/standard-controls Standard HTML source
tests/                         Playwright/Vitest regression tests
docs/                          Project introduction and public documentation
```

## Who is this for?

- Developers building browser automation or AI agents
- QA engineers creating stable UI regression fixtures
- Teams evaluating semantic control detection
- Researchers comparing learned actions across UI frameworks
- Contributors who need a small reproducible web-workflow benchmark

## Project scope

This repository is the public control-sample edition of WorkCanvas Studio. It focuses on framework-neutral pages and reproducible tests. Production connectors, private workflow plans, learned organizational memory, and vendor-specific adapters are intentionally outside this repository.

See [Project introduction](docs/INTRODUCTION.md) for design principles and the roadmap.

## Contributing

Contributions are welcome, especially accessible controls and reproducible workflow patterns from additional web frameworks. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

Never commit real service URLs, credentials, workflow plans, screenshots, downloads, logs, customer names, or learned memory. Use synthetic values in every public fixture. Please report security concerns privately to the repository owner instead of opening a public issue.

## Search keywords

Browser automation, AI agent, workflow automation, UI testing, Playwright, React automation, Standard HTML, semantic locator, popup automation, dynamic grid, reusable control skill, ERP UI testing.

## License

[MIT](LICENSE)
