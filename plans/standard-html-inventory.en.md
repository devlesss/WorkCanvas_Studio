# Standard HTML Inventory Inquiry and Row Addition

## Purpose

Use the Standard HTML sample to query inventory, select an item through a semantic dialog, and add one result row.

## Start Conditions

- The Standard HTML sample is available at `/samples/standard-controls.html`.
- The page is displayed in English.
- No authentication or menu navigation is required.

## Input Information

- Warehouse: Seoul Warehouse
- Item code/name: ITEM-001
- Item type: Raw material
- Base date: 2026-08-04
- Stock status: Available
- Include zero stock: false

## Workflow Steps

1. Select the warehouse from the Warehouse control.
2. Open the item search dialog using the Search button beside Item code/name.
3. Enter `ITEM-001` in the dialog's Item code/name field.
4. Select Query inside the dialog.
5. Select the exact `ITEM-001` result.
6. Select Confirm and verify that the dialog closes.
7. Verify that `ITEM-001` is reflected in the main Item code/name field.
8. Select Raw material as the Item type.
9. Enter the Base date.
10. Select Available as the Stock status and leave Include zero stock unchecked.
11. Select Query on the main form.
12. Verify that the result table contains `ITEM-001`.
13. Record the current number of result rows.
14. Select Add row once.
15. Verify that the result-table row count increased by exactly one.

## Judgment Rules

- Resolve controls by label, accessible role, stable ID, or test ID before using coordinates.
- Distinguish the dialog Query button from the main-form Query button by the active dialog scope.
- Do not treat a successful click as completion without checking its postcondition.
- Treat an empty but settled query result as a valid zero-result outcome, not an execution failure.
- Do not select Save; this public plan demonstrates read-only query and local row addition only.

## Completion Conditions

- The item search dialog opened and closed successfully.
- `ITEM-001` remained in the main Item code/name field.
- The main query completed with a settled result surface.
- Add row increased the intended result table by exactly one row.

## Stop and Report Conditions

- The intended control cannot be identified unambiguously.
- The dialog does not become visible after Search.
- The selected item is not reflected in the main form.
- The result row count does not increase by exactly one.
- A destructive or external data-submission action would be required.
