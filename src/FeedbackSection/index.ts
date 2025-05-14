import { getCurrentLang, intl } from "../i18n/locales";
import { setupTextArea } from "./TextArea";

export function setupFeedbackSection() {
  const titleElement = document.getElementById("txtAdditionalFeedback");
  const lang = getCurrentLang();
  const title = intl[lang].additionalFeedback;

  if (titleElement) {
    titleElement.innerHTML = title;
  }

  setupTextArea();
}
