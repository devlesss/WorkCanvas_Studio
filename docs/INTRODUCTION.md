# Introducing WorkCanvas Studio

## Learn an interaction once. Verify it everywhere.

WorkCanvas Studio is an open collection of realistic business-interface samples for browser workflow automation. It exists to make difficult UI behavior reproducible before an automation is connected to a real operational system.

Business screens rarely consist of simple text fields. A user may open a lookup dialog, query by a business key, select exactly one result, return to the original form, add a detail row, and then edit controls managed by a frontend framework. Each transition needs evidence; a successful click alone is not proof that the intended state changed.

The project therefore emphasizes observable outcomes:

1. A lookup trigger must produce a visible dialog.
2. A selection must be reflected in the originating form.
3. A row-add action must increase the intended table by exactly one row.
4. A controlled input must retain its value after events and state updates.
5. Equivalent business actions should be testable across UI frameworks.

## Public edition

The public repository currently contains two deliberately small applications:

- A Standard HTML inventory inquiry screen
- A React purchase-order screen

Together they provide forms, dates, selects, radio buttons, checkboxes, semantic dialogs, query results, controlled state, and dynamic detail rows. Playwright tests verify the most important transitions.

## Design principles

- **Framework-neutral semantics:** Prefer labels, roles, and state changes over generated DOM paths.
- **Evidence before completion:** Verify the postcondition of an action.
- **Synthetic by default:** Public fixtures must never depend on private systems or data.
- **Regression first:** Every shared control pattern should have a reproducible browser test.
- **Small and inspectable:** Samples should remain easy to understand and adapt.

## Roadmap

- Add accessible Vue and Web Components samples.
- Expand popup patterns, empty query results, and nested grids.
- Publish framework-neutral action and evidence schemas.
- Add reusable benchmark plans for agent evaluation.
- Document learned-action portability and safe fallback strategies.

WorkCanvas Studio is useful even without an AI planner: it can serve as a fixture library for Playwright, locator research, QA training, and automation regression testing.
