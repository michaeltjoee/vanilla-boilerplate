export type ReviewFormData = {
  findabilityRating: number;
  accuracyRating: number;
  additionalFeedback: string;
};

export type RatingType = Exclude<keyof ReviewFormData, "additionalFeedback">;
