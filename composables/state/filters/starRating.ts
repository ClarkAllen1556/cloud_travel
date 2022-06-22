type StarRating = {
  five: boolean;
  four: boolean;
  three: boolean;
  two: boolean;
  one: boolean;
  zero: boolean;
};

export const useStarRating = () => {
  return useState<StarRating>('starFilter', () => ({
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
    zero: false,
  }));
};
