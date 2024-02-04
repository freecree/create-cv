import { Form, Input } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import DatePicker from '../date-picker/DatePicker';
import { usePersonalInfo } from '../../hooks/usePersonalInfo';

function PersonalInfo() {
  const { register } = usePersonalInfo();

  return (
    <div>
      <FormSectionTitle>Персональна інформація</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item label='Фіо'>
          <Input {...register('name')} placeholder='Фіо' />
        </Form.Item>
        <Form.Item label='Місце проживання'>
          <Input {...register('location')} placeholder='Місце проживання' />
        </Form.Item>
        <Form.Item label='Номер телефону'>
          <Input {...register('phone')} placeholder='Номер телефону' />
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
