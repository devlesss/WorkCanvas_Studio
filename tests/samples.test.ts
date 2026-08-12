import { chromium, type Browser } from "playwright";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer, type ViteDevServer } from "vite";

let browser: Browser;
let server: ViteDevServer;
beforeAll(async () => {
  server = await createServer({ root: "web", server: { host: "127.0.0.1", port: 0 } });
  await server.listen();
  browser = await chromium.launch({ headless: true });
});
afterAll(async () => { await browser.close(); await server.close(); });

function sampleUrl(path: string): string {
  const address = server.httpServer?.address();
  if (!address || typeof address === "string") throw new Error("Sample server did not expose a TCP port.");
  return `http://127.0.0.1:${address.port}${path}`;
}

describe("public control samples", () => {
  it("operates the standard HTML dialog and row-add controls", async () => {
    const page = await browser.newPage();
    await page.goto(sampleUrl("/samples/standard-controls.html"));
    await page.getByRole("button", { name: "품목 검색 팝업 열기" }).click();
    expect(await page.getByRole("dialog").isVisible()).toBe(true);
    await page.getByRole("button", { name: "취소" }).click();
    const before = await page.locator("#resultBody tr").count();
    await page.getByRole("button", { name: "행 추가" }).click();
    expect(await page.locator("#resultBody tr").count()).toBe(before + 1);
    await page.close();
  });

  it("operates React controlled inputs, modal, and detail rows", async () => {
    const page = await browser.newPage();
    await page.goto(sampleUrl("/samples/react/"));
    await page.getByTestId("note").fill("public sample");
    expect(await page.getByTestId("note").inputValue()).toBe("public sample");
    await page.getByRole("button", { name: "검색" }).click();
    expect(await page.getByRole("dialog").isVisible()).toBe(true);
    await page.getByRole("button", { name: "취소" }).click();
    await page.getByRole("button", { name: "행 추가" }).click();
    expect(await page.locator("tbody tr").count()).toBe(1);
    await page.close();
  });
});
