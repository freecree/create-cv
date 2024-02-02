import { Form, Input, Space, Select } from 'antd';
import DatePicker from '../date-picker/DatePicker';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';

function Education() {
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
            <DatePicker placeholder='Дата завершення' />
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
