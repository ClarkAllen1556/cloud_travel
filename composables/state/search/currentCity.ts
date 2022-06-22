export const useCurrentCityState = () => {
  return useState<string>('currentCity', () => '');
};
