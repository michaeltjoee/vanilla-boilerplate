import { getCurrentLang, intl } from "../../i18n/locales";

import icClose from "../../assets/icons/tds_ic_cross_medium.svg";
import { handleCloseModal } from "../../shared/utils";

const createButtonElement = () => {
  const button = document.createElement("button");
  button.className = "modal-close";
  button.type = "button";
  button.tabIndex = -1;
  const img = document.createElement("img");
  img.src = icClose;
  img.alt = "";
  button.appendChild(img);
  button.addEventListener("click", handleCloseModal);

  return button;
};

export function setupModalDesktopHeaderTitle() {
  const htmlLang = getCurrentLang();
  const title = intl[htmlLang].title;

  const modalDesktopTitleElement = document.getElementById(
    "modalHeaderDesktopTitle"
  );
  const modalMobileTitleElement = document.getElementById("modalHeaderMobile");

  const modalHeaderDesktopSection = document.getElementById(
    "modalHeaderDesktopSection"
  );
  const modalHeaderMobileSection = document.getElementById(
    "modalHeaderMobileSection"
  );

  if (modalDesktopTitleElement) {
    modalDesktopTitleElement.innerHTML = title;
  }

  if (modalMobileTitleElement) {
    modalMobileTitleElement.innerHTML = title;
  }

  if (modalHeaderDesktopSection) {
    modalHeaderDesktopSection.appendChild(createButtonElement());
  }

  if (modalHeaderMobileSection) {
    modalHeaderMobileSection.appendChild(createButtonElement());
  }
}
