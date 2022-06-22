const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD',
      notation: 'standard',
      currencyDisplay: 'code',
    },
    decimal: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent',
      useGrouping: false,
    },
  },
  'ja-JP': {
    currency: {
      style: 'currency',
      currency: 'JPY',
      notation: 'standard',
      currencyDisplay: 'code',
    },
    decimal: {
      style: 'decimal',
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 5,
    },
    percent: {
      style: 'percent',
      useGrouping: false,
    },
  },
};

export default async () => {
  return {
    locale: 'en-US',
    globalInjection: true,
    numberFormats: numberFormats,
    currency: {
      style: 'currency',
      currency: 'ja-JP',
      notion: 'standard',
      currencyDisplay: 'symbol',
    },
  };
};
