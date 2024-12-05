import type { Options } from "tsup";
import { defineConfig } from "tsup";

const config: Options = {
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  outDir: "dist",
  clean: true,
};

export default defineConfig(config);
