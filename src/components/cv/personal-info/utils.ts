export const getPluralYears = (age: number) => {
  let name = 'років';
  const lastDigit = age % 10;
  if (lastDigit === 1) name = 'рік';
  if ([2, 3, 4].includes(lastDigit)) name = 'роки';
  return name;
};
