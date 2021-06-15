export const parseFloatSafe = (amount) => {
  if (amount === undefined || amount === '') {
    return 0;
  }
  if (typeof amount === 'string') {
    return parseFloat(amount);
  }
  return amount;
};

export const formatCurrency = (amount, options = {}) => {
  const {
    symbol = '$',
    symbolAtEnd = false,
    decimalDelimiter = '.',
    thousandDelimiter = ',',
  } = options || {};

  if (amount === undefined) {
    return '';
  }
  amount = parseFloatSafe(amount);

  if (
    !Number.isSafeInteger(amount) ||
    String(amount).split('.').length < 2 ||
    String(amount).split('.')[1].length <= 2
  ) {
    amount = amount.toFixed(2);
  }

  let numberString = amount
    .toString()
    .replace('.', decimalDelimiter)
    .replace(/\B(?=(\d{3})+(?!\d))/g, thousandDelimiter);

  let isNegative = false;
  if (numberString.startsWith('-')) {
    isNegative = true;
    numberString = numberString.replace('-', '');
  }

  const prefix = symbolAtEnd ? '' : symbol;
  const suffix = symbolAtEnd ? symbol : '';
  const negativeSymbol = isNegative ? '-' : '';
  return `${negativeSymbol}${prefix}${numberString}${suffix}`;
};
