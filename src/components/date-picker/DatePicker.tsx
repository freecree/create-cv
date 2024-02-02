import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';

function DatePicker({ placeholder }: AntDatePickerProps) {
  const onChange: AntDatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <AntDatePicker
      locale={locale}
      style={{ width: '170px' }}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default DatePicker;
