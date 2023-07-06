import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    sourcemap: "hidden",
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes("node_modules/solid-js") ||
            id.includes("node_modules/@solid-js") ||
            id.includes("node_modules/@solidjs")
          ) {
            return "solidjs";
          } else if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
