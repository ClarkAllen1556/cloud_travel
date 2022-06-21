type ReviewScoreDescription = {
  excellent: boolean;
  veryGood: boolean;
  good: boolean;
  fair: boolean;
  poor: boolean;
  noReview: boolean;
};

export const useReviewScoreFilter = () => {
  return useState<ReviewScoreDescription>('reviewFilters', () => ({
    excellent: false,
    veryGood: false,
    good: false,
    fair: false,
    poor: false,
    noReview: false,
  }));
};
