import { getCurrentLang, intl } from "../i18n/locales";
import { reviewFormState } from "../shared";
import { handleCloseModal, updateButtonState } from "../shared/utils";
import { setupModalDesktopHeaderTitle } from "./ModalHeader";

function setupReviewButton() {
  function handleSubmit(e: Event) {
    e.preventDefault();
    const hasFilledForm =
      reviewFormState.accuracyRating > 0 &&
      reviewFormState.findabilityRating > 0;

    if (!hasFilledForm) return;

    const brazeBridge = window.brazeBridge;

    if (brazeBridge) {
      brazeBridge
        .getUser()
        .setCustomUserAttribute("survey_response", reviewFormState);
    } else {
      console.error("Braze bridge not found: ", window.brazeBridge);
      console.error("data: ", reviewFormState);
    }

    handleCloseModal();
  }

  const htmlLang = getCurrentLang();
  const btnTitle = intl[htmlLang].submit;
  const btnSubmit = document.getElementById("btnSubmitReview");

  if (btnSubmit) {
    btnSubmit.textContent = btnTitle;
    btnSubmit.addEventListener("click", handleSubmit);
    updateButtonState();
  }
}

export const setupClickOutsideHandler = () => {
  const modal = document.querySelector(".modal-popup");

  function handleOutsideClick(event: Event) {
    if (modal && !modal.contains(event.target as HTMLElement)) {
      handleCloseModal();
    }
  }
  document.addEventListener("click", handleOutsideClick, true);
};

export const setupReviewModal = () => {
  setupModalDesktopHeaderTitle();
  setupReviewButton();
  setupClickOutsideHandler();
};
