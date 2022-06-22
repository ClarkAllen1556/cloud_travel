type Result = {
  result: any | null;
  error: any | null;
};

export const useSearchState = () => {
  return useState<Result>('searchState', () => ({
    result: null,
    error: null,
  }));
};
