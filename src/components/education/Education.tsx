import { Form, Input, DatePicker, Space, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';

function Education() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const degreeOptions = [
    {
      value: 'master',
      label: 'Магістр',
    },
    {
      value: 'bachelor',
      label: 'Бакалавр',
    },
  ];

  return (
    <div>
      <FormSectionTitle>Освіта</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item label='Заклад'>
          <Input placeholder='Заклад' />
        </Form.Item>
        <Form.Item label='Дата завершення'>
          <Space direction='vertical'>
            <DatePicker
              style={{ width: '170px' }}
              onChange={onChange}
              placeholder='Дата завершення'
            />
          </Space>
        </Form.Item>
        <Form.Item label='Ступінь' style={{ width: '170px' }}>
          <Select defaultValue='bachelor' options={degreeOptions} />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default Education;
