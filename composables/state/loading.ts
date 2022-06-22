export const useLoadingState = () => {
  return useState<boolean>('isLoading', () => false);
};
