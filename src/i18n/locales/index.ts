import { idLang } from "./id";
import { enLang } from "./en";
import type { Lang } from "./types";

export const getCurrentLang = () => {
  const currentLang = (document.documentElement.lang || "en") as Lang;
  return currentLang;
};

export const intl = { id: idLang, en: enLang };
