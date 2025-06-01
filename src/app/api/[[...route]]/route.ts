import { Hono } from "hono";
import { cors } from "hono/cors";
import { cache } from "hono/cache";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { languageDetector, LanguageVariables } from "hono/language";
import { compress } from "hono/compress";

const server = new Hono().basePath("/api");

server.use("*", cors());
server.use("*", compress());
server.use("*", logger());
server.use(
  "*",
  languageDetector({
    convertDetectedLanguage: (lang) => lang.split("-")[0],
    supportedLanguages: ["en", "zh", "fr"],
    fallbackLanguage: "en",
  })
);
server.use(
  "*",
  cache({
    cacheName: "open complaint",
    cacheControl: "max-age=3600",
  })
);

server.get("/hello", (c) => {
  const lang = c.get("language");

  return c.json({
    message: `Hello Next.js! ${lang}`,
  });
});

export const GET = handle(server);
export const POST = handle(server);
