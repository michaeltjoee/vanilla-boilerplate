import { defineConfig } from "vite";
import htmlInline from "vite-plugin-html-inline";
import { createHtmlPlugin } from "vite-plugin-html";

const isProd = process.env.NODE_ENV === "production";

const liquidLangLogic = `{% assign lang = \${language} | downcase %}
{% if lang != "en" and lang != "id" %}
  {% assign lang = "id" %}
{% endif %}`;

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

    createHtmlPlugin({
      inject: {
        data: {
          htmlAttributes: isProd ? `lang={{lang}}` : `lang=id`,
          preHtml: isProd ? liquidLangLogic : "",
        },
      },
    }),
    {
      name: "inject-liquid-before-doctype",
      transformIndexHtml(html, ctx) {
        if (!isProd) return html;
        return `${liquidLangLogic}\n${html}`;
      },
    },
  ],
});
