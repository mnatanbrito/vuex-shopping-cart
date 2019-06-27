export const formatNumber = (value, digits) => {
  if (typeof value !== 'number') {
    return '';
  }

  return value.toFixed(digits || 2);
};
