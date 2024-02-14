import { Form, Input, Space, Select } from 'antd';
import DatePicker from '../date-picker/DatePicker';
import type { DatePickerProps } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useAppDispatch } from '../../hooks/redux-hooks';
import {
  setInstitution,
  setGraduationDate,
  setDegree,
} from '../../slices/educationSlice';

function Education() {
  const education = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();

  const handleChangeInstitution = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInstitution(e.target.value));
  };
  const handleChangeGraduationDate: DatePickerProps['onChange'] = (
    _,
    dateString,
  ) => {
    dispatch(setGraduationDate(dateString));
  };
  const handleChangeDegree = (degree: string) => {
    dispatch(setDegree(degree));
  };

  const degreeOptions = [
    {
      value: 'магістр',
      label: 'Магістр',
    },
    {
      value: 'бакалавр',
      label: 'Бакалавр',
    },
  ];

  return (
    <div>
      <FormSectionTitle>Освіта</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item name={'institution'} label='Заклад'>
          <Input onChange={handleChangeInstitution} placeholder='Заклад' />
        </Form.Item>
        <Form.Item label='Дата завершення'>
          <Space direction='vertical'>
            <DatePicker
              onChange={handleChangeGraduationDate}
              placeholder='Дата завершення'
            />
          </Space>
        </Form.Item>
        <Form.Item label='Ступінь' style={{ width: '170px' }}>
          <Select
            onChange={handleChangeDegree}
            defaultValue={education.degree}
            options={degreeOptions}
          />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default Education;
