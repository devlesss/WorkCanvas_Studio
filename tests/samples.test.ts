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
    await page.locator("#language").selectOption("ko");
    expect(await page.getByRole("heading", { name: "재고조회 컨트롤 테스트" }).isVisible()).toBe(true);
    await page.locator("#language").selectOption("en");
    await page.getByRole("button", { name: "Open item search dialog" }).click();
    expect(await page.getByRole("dialog").isVisible()).toBe(true);
    await page.getByRole("button", { name: "Cancel" }).click();
    const before = await page.locator("#resultBody tr").count();
    await page.getByRole("button", { name: "Add row" }).click();
    expect(await page.locator("#resultBody tr").count()).toBe(before + 1);
    await page.close();
  });

  it("operates React controlled inputs, modal, and detail rows", async () => {
    const page = await browser.newPage();
    await page.goto(sampleUrl("/samples/react/"));
    await page.getByLabel("Language / 언어").selectOption("ko");
    expect(await page.getByRole("heading", { name: "구매발주 컨트롤 테스트" }).isVisible()).toBe(true);
    await page.getByLabel("Language / 언어").selectOption("en");
    await page.getByTestId("note").fill("public sample");
    expect(await page.getByTestId("note").inputValue()).toBe("public sample");
    await page.getByRole("button", { name: "Search" }).click();
    expect(await page.getByRole("dialog").isVisible()).toBe(true);
    await page.getByRole("button", { name: "Cancel" }).click();
    await page.getByRole("button", { name: "Add row" }).click();
    expect(await page.locator("tbody tr").count()).toBe(1);
    await page.close();
  });
});
