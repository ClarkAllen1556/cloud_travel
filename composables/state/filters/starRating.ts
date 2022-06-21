type StarRating = {
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
};

export const useStarRating = () => {
  return useState<StarRating>('starFilter', () => ({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  }));
};
