import { defineConfig } from "vite";
import { resolve } from "node:path";
export default defineConfig({root:resolve("samples/react"),base:"/samples/react/",build:{outDir:resolve("web/samples/react"),emptyOutDir:true}});
