import { Form, Input } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import DatePicker from '../date-picker/DatePicker';
import { usePersonalInfoSelector } from '../../hooks/personal-info/usePersonalInfoSelector';
import { usePersonalInfoDispatch } from '../../hooks/personal-info/usePersonalInfoDispatch';
import { setName } from '../../store/personal-info/personalInfoSlice';

function PersonalInfo() {
  const name = usePersonalInfoSelector((state) => state.personalInfo.name);
  const dispatch = usePersonalInfoDispatch();

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setName(e.target.value));
  }

  console.log('Name from reduser:', name);

  return (
    <div>
      <FormSectionTitle>Персональна інформація</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item name={'name'} label='Фіо'>
          <Input onChange={handleChangeName} placeholder='Фіо' />
        </Form.Item>
        <Form.Item name={'location'} label='Місце проживання'>
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
