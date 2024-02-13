const isValidDate = (d: Date) => {
  return !isNaN(d.getTime());
};

export const calculateAge = (birthDateStr: string): number => {
  const birthDate = new Date(birthDateStr);
  if (!isValidDate(birthDate)) {
    return 0;
  }

  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const m = currentDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const getPluralYears = (age: number) => {
  let name = 'років';
  const lastDigit = age % 10;
  if (lastDigit === 1) name = 'рік';
  if ([2, 3, 4].includes(lastDigit)) name = 'роки';
  return name;
};
