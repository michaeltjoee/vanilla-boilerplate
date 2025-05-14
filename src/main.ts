import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/common.css";
import "./style.css";
import "./ReviewModal/ReviewModal.scss";
import "./ReviewModal/ModalHeader/ModalHeader.scss";
import "./RatingSection/RatingSection.scss";
import "./RatingSection/RatingBox.scss";
import "./FeedbackSection/FeedbackSection.scss";
import './FeedbackSection/TextArea/TextArea.scss'

import { setupReviewModal } from "./ReviewModal";
import { setupRatingSection } from "./RatingSection";
import { setupFeedbackSection } from "./FeedbackSection";

setupReviewModal();
setupRatingSection();
setupFeedbackSection();
