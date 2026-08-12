import { defineConfig } from "vite";
import { cpSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  root: "web",
  build: { outDir: "../dist", emptyOutDir: true },
  plugins: [{
    name: "copy-control-samples",
    closeBundle() {
      const output = resolve("dist");
      mkdirSync(resolve(output, "samples"), { recursive: true });
      cpSync(resolve("web/samples"), resolve(output, "samples"), { recursive: true });
      cpSync(resolve("web/variables.css"), resolve(output, "variables.css"));
    }
  }]
});
