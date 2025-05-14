import { defineConfig } from "vite";
import htmlInline from 'vite-plugin-html-inline';

export default defineConfig({
  server: {
    host: "local.tiket.com",
    port: 5173,
  },
  build: {
    target: "esnext",
    minify: "esbuild",
  },
  plugins: [
    htmlInline({
      scriptMatchPattern: [/index\..*\.js$/],
      styleMatchPattern: [/index\..*\.css$/],
    }),
  ],
});
