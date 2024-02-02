import { Form, Input } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import DatePicker from '../date-picker/DatePicker';

function PersonalInfo() {
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
          <DatePicker placeholder='Дата народження' />
        </Form.Item>
        <Form.Item>
          <AvatarUpload />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default PersonalInfo;
