import { getCurrentLang, intl } from "../../i18n/locales";
import { reviewFormState } from "../../shared";


const MAX_LENGTH = 250;
let isFocused = false;

const container = document.getElementById("reviewContainer");
const textarea = document.getElementById("reason") as HTMLTextAreaElement;
const labelText = document.getElementById("labelText");
const invisibleLabel = document.getElementById("invisibleLabel");
const letterCountEl = document.getElementById("letterCount");

export function setupTextArea() {
  const lang = getCurrentLang();
  const placeholderText = intl[lang].feedbackPlaceholder;

  const textAreaContainer = document.getElementById("txtAreaContainer");
  if (textAreaContainer) {
    textAreaContainer.removeAttribute("style");
  }

  if (textarea) {
    textarea.placeholder = placeholderText;
  }

  if (labelText) {
    labelText.textContent = placeholderText;
  }

  if (invisibleLabel) {
    invisibleLabel.textContent = placeholderText;
  }

  function updateFocusClass(focused: boolean) {
    isFocused = focused;
    if (container) {
      container.classList.toggle("state_focused", isFocused);
    }
  }

  function updateLetterCount() {
    const length = textarea.value.length;
    if (letterCountEl) {
      letterCountEl.textContent = `${length}/${MAX_LENGTH}`;
      reviewFormState.additionalFeedback = textarea.value;
    }
  }

  // Event bindings
  textarea.addEventListener("focus", () => updateFocusClass(true));
  textarea.addEventListener("blur", () => updateFocusClass(false));
  textarea.addEventListener("input", updateLetterCount);

  // Initial setup
  updateLetterCount();
}
