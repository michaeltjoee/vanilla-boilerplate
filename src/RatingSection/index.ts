import { reviewFormState } from "../shared";
import type { RatingType } from "../shared/types";
import { getCurrentLang, intl } from "../i18n/locales";
import { updateButtonState } from "../shared/utils";

const STARS = [
  { label: "Very Bad", value: 1 },
  { label: "Bad", value: 2 },
  { label: "Okay", value: 3 },
  { label: "Good", value: 4 },
  { label: "Excellent", value: 5 },
];

function renderStars(formKey: RatingType) {
  const container = document.getElementById(formKey);

  if (container) {
    container.innerHTML = "";

    STARS.forEach(({ label, value }) => {
      const button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("aria-label", label);
      button.className = "btn-rate";

      button.onclick = () => {
        if (value === reviewFormState[formKey]) {
          reviewFormState[formKey] = 0;
        } else {
          reviewFormState[formKey] = value;
        }
        renderStars(formKey);
        updateButtonState();
      };

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "32");
      svg.setAttribute("height", "32");
      svg.setAttribute("viewBox", "0 0 34 32");
      svg.setAttribute("fill", "none");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        `M25.5624 31.6821L16.9806 27.1974L8.39887 31.6821C7.23568 32.2899 5.87618 31.3081 6.09833 30.0206L7.7373 20.5219L0.794512 13.7948C-0.146533 12.883 0.372747 11.2944 1.67324 11.1066L11.2679 9.72074L15.5588 1.0785C16.1404 -0.0928974 17.8208 -0.0928974 18.4024 1.0785L22.6933 9.72074L32.288 11.1066C33.5885 11.2944 34.1078 12.883 33.1668 13.7948L26.224 20.5219L27.8629 30.0206C28.0851 31.3081 26.7256 32.2899 25.5624 31.6821Z`
      );
      path.setAttribute(
        "fill",
        value <= reviewFormState[formKey] ? "#FEE645" : "#AEB2BE"
      );

      svg.appendChild(path);
      button.appendChild(svg);
      container.appendChild(button);
    });
  }
}

function setupRateFindabilityForm() {
  const formKey = "findabilityRating";
  const titleElement = document.getElementById("txtFindabilityRating");
  const lang = getCurrentLang();
  const title = intl[lang][formKey];

  if (titleElement) {
    titleElement.innerHTML = title;
  }
  renderStars(formKey);
}

function setupRateAccuracyForm() {
  const formKey = "accuracyRating";
  const titleElement = document.getElementById("txtAccuracyRating");
  const lang = getCurrentLang();
  const title = intl[lang][formKey];

  if (titleElement) {
    titleElement.innerHTML = title;
  }
  renderStars(formKey);
}

export function setupRatingSection() {
  setupRateFindabilityForm();

  // Create separator
  const separator = document.getElementById("desktopSeparator");

  if (separator) {
    separator.removeAttribute("style");
  }

  setupRateAccuracyForm();
}
