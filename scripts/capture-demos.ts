import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium, type Page } from "playwright";
import { createServer } from "vite";

// Rebuild public demo media from deterministic synthetic workflows. / 결정적인 가상 워크플로로 공개 데모 미디어를 다시 생성합니다.
const mediaDir = resolve("docs/media");
const videoDir = resolve(mediaDir, "video");
await mkdir(videoDir, { recursive: true });

const server = await createServer({ root: "web", server: { host: "127.0.0.1", port: 0 } });
await server.listen();
const address = server.httpServer?.address();
if (!address || typeof address === "string") throw new Error("Demo server did not expose a TCP port.");
const baseUrl = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ headless: true });

async function pause(page: Page, milliseconds = 650): Promise<void> {
  await page.waitForTimeout(milliseconds);
}

async function captureStandardHtml(): Promise<void> {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, recordVideo: { dir: videoDir, size: { width: 1280, height: 800 } } });
  const page = await context.newPage();
  const video = page.video();
  await page.goto(`${baseUrl}/samples/standard-controls.html`);
  await pause(page);
  await page.screenshot({ path: resolve(mediaDir, "standard-html.png"), fullPage: true });
  await page.locator("#language").selectOption("ko"); await pause(page, 500);
  await page.locator("#language").selectOption("en"); await pause(page, 500);
  await page.getByRole("button", { name: "Open item search dialog" }).click(); await pause(page);
  await page.getByTestId("popup-item-keyword").fill("ITEM-001");
  await page.getByRole("button", { name: "Query" }).last().click(); await pause(page);
  await page.getByRole("button", { name: "Confirm" }).click(); await pause(page);
  await page.getByRole("button", { name: "Query" }).click(); await pause(page);
  await page.getByRole("button", { name: "Add row" }).click(); await pause(page, 900);
  await page.close();
  await context.close();
  if (video) await video.saveAs(resolve(videoDir, "standard-html.webm"));
}

async function captureReact(): Promise<void> {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, recordVideo: { dir: videoDir, size: { width: 1280, height: 800 } } });
  const page = await context.newPage();
  const video = page.video();
  await page.goto(`${baseUrl}/samples/react/`);
  await pause(page);
  await page.screenshot({ path: resolve(mediaDir, "react.png"), fullPage: true });
  await page.getByLabel("Language / 언어").selectOption("ko"); await pause(page, 500);
  await page.getByLabel("Language / 언어").selectOption("en"); await pause(page, 500);
  await page.getByTestId("note").fill("Public workflow sample"); await pause(page, 400);
  await page.getByRole("button", { name: "Search" }).click(); await pause(page);
  await page.getByTestId("vendor-keyword").fill("Wonjin");
  await page.getByRole("button", { name: "Query" }).click(); await pause(page, 500);
  await page.getByLabel("V001 Choose").check();
  await page.getByRole("button", { name: "Confirm" }).click(); await pause(page);
  await page.getByRole("button", { name: "Add row" }).click(); await pause(page);
  await page.getByLabel("Row 1 item").selectOption("PART-001");
  await page.getByLabel("Row 1 quantity").fill("10"); await pause(page, 900);
  await page.close();
  await context.close();
  if (video) await video.saveAs(resolve(videoDir, "react.webm"));
}

try {
  await captureStandardHtml();
  await captureReact();
} finally {
  await browser.close();
  await server.close();
}
