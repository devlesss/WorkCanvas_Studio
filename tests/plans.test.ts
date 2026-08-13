import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

// Keep localized plans structurally equivalent. / 다국어 플랜의 구조적 동등성을 유지합니다.
const plans = [
  "plans/standard-html-inventory.en.md",
  "plans/standard-html-inventory.ko.md",
  "plans/react-purchase-order.en.md",
  "plans/react-purchase-order.ko.md"
];

describe("public workflow plans", () => {
  it.each(plans)("contains inputs, steps, rules, completion, and stop evidence: %s", async path => {
    const markdown = await readFile(path, "utf8");
    expect(markdown).toMatch(/## (?:Input Information|입력 정보)/);
    expect(markdown).toMatch(/## (?:Workflow Steps|업무 절차)/);
    expect(markdown).toMatch(/## (?:Judgment Rules|판단 규칙)/);
    expect(markdown).toMatch(/## (?:Completion Conditions|완료 조건)/);
    expect(markdown).toMatch(/## (?:Stop and Report Conditions|중단·보고 조건)/);
    expect(markdown).not.toMatch(/password|비밀번호|https?:\/\/(?!127\.0\.0\.1)/i);
  });
});
