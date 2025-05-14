import { reviewFormState } from ".";

export function updateButtonState() {
  const hasFilledForm =
    reviewFormState.accuracyRating > 0 && reviewFormState.findabilityRating > 0;

  const btnSubmit = document.getElementById(
    "btnSubmitReview"
  ) as HTMLButtonElement;

  if (btnSubmit) {
    btnSubmit.disabled = !hasFilledForm;
    btnSubmit.className = hasFilledForm ? "btn-submit" : "btn-submit disabled";
  }
}

export function handleCloseModal() {
  const modal = document.getElementById("reviewPopup");
  const modalWrapper = document.getElementById("reviewPopupWrapper");
  if (modal) {
    modal.classList.add("modal-closing");
  }

  if (modalWrapper) {
    modalWrapper.classList.add("modal-wrapper-closing");
  }

  setTimeout(() => {
    const appboyBridge = window.appboyBridge;
    if (appboyBridge) {
      appboyBridge.closeMessage();
    } else {
      console.error("appboyBridge not found: ", window.appboyBridge);
    }
  }, 1000);
}
