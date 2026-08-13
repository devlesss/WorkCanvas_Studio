# React Purchase Order with One Detail Row

## Purpose

Use the React sample to enter purchase-order master data, select a vendor through a controlled modal, and add one detail row.

## Start Conditions

- The React sample is available at `/samples/react/`.
- The page is displayed in English.
- No authentication or menu navigation is required.

## Input Information

- Order date: 2026-08-04
- Account type: Raw material
- Vendor: Wonjin
- Procurement type: Domestic purchase
- Notes: Public workflow sample
- Item: PART-001
- Quantity: 10
- Urgent: false

## Workflow Steps

1. Enter the Order date.
2. Select Raw material as the Account type.
3. Select Search beside the Vendor field and verify that the Vendor Search dialog becomes visible.
4. Enter `Wonjin` in Vendor code/name.
5. Select Query inside the dialog.
6. Select the exact `V001 · Wonjin` result.
7. Select Confirm and verify that the dialog closes.
8. Verify that Wonjin is reflected in the read-only Vendor field.
9. Select Domestic purchase as the Procurement type.
10. Enter `Public workflow sample` in Notes and verify that React state retains the value.
11. Record the number of rows in Order Details.
12. Select Add row once.
13. Verify that the Order Details row count increased by exactly one.
14. In the new row, select `PART-001 · Motor assembly` as Item.
15. Enter `10` as Quantity and leave Urgent unchecked.
16. Verify the Item, Quantity, and Urgent values in the same new row.

## Judgment Rules

- Prefer labels, accessible roles, stable IDs, and test IDs over generated framework paths.
- Scope dialog controls to the visible `role="dialog"` surface.
- Dispatch normal browser input/change events so React controlled state receives updates.
- Bind detail inputs to the row created by the current Add row action.
- Do not select Save; the public sample must not imply an external submission.

## Completion Conditions

- The Vendor Search dialog opened and closed successfully.
- Wonjin remained in the Vendor field.
- Notes retained the requested value after React state updates.
- Exactly one new detail row was added.
- The new row contains PART-001, quantity 10, and Urgent unchecked.

## Stop and Report Conditions

- The controlled input does not retain its requested value.
- The Vendor Search dialog does not become visible.
- Vendor selection is not reflected in the main form.
- The new detail row cannot be identified unambiguously.
- A destructive or external data-submission action would be required.
