import { PhoneNumber } from 'antd-phone-input/types';
import { ChangeEvent } from 'react';
import PhoneInput from 'antd-phone-input';

interface PhoneCountryInputProps {
  onChange?: (value: string) => void;
}
function PhoneCountryInput({ onChange }: PhoneCountryInputProps) {
  const handleChangePhone = (
    value: PhoneNumber,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(event.target.value);
  };

  return <PhoneInput country='ua' onChange={handleChangePhone} />;
}

export default PhoneCountryInput;
