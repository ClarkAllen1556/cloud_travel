type HotelName = {
  name: string;
};

export const useHotelNameFilter = () => {
  return useState<HotelName>('hotelName', () => ({
    name: '',
  }));
};
