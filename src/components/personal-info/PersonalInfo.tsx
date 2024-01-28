import { Form, Input, DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import { FormSectionWrapper } from '../styles/FormSectionWrapper';
import { FormSectionTitle } from '../styles/FormSectionTitle';
import { FormInputLabel } from '../styles/FormInputLable';
import AvatarUpload from '../avatar-upload/AvatarUpload';

function PersonalInfo() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <FormSectionTitle level={2}>Персональна інформація</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item>
          <FormInputLabel>Фіо</FormInputLabel>
          <Input placeholder='Фіо' />
        </Form.Item>
        <Form.Item>
          <FormInputLabel>Місце проживання</FormInputLabel>
          <Input placeholder='Місце проживання' />
        </Form.Item>
        <Form.Item>
          <FormInputLabel>Номер телефону</FormInputLabel>
          <Input placeholder='Номер телефону' />
        </Form.Item>
        <Form.Item>
          <FormInputLabel>Дата народження</FormInputLabel>
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
