import { Form, Input, DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';

function PersonalInfo() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <FormSectionTitle>Персональна інформація</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item label='Фіо'>
          <Input placeholder='Фіо' />
        </Form.Item>
        <Form.Item label='Місце проживання'>
          <Input placeholder='Місце проживання' />
        </Form.Item>
        <Form.Item label='Номер телефону'>
          <Input placeholder='Номер телефону' />
        </Form.Item>
        <Form.Item label='Дата народження'>
          <Space direction='vertical'>
            <DatePicker
              style={{ width: '170px' }}
              onChange={onChange}
              placeholder='Дата народження'
            />
          </Space>
        </Form.Item>
        <Form.Item>
          <AvatarUpload />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default PersonalInfo;
