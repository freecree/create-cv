import { Form, Input } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import DatePicker from '../date-picker/DatePicker';
import type { DatePickerProps } from 'antd';
import { usePersonalInfoSelector } from '../../hooks/redux-hooks';
import { usePersonalInfoDispatch } from '../../hooks/redux-hooks';
import {
  setName,
  setLocation,
  setPhone,
  setBirth,
  setAvatar,
} from '../../store/personal-info/personalInfoSlice';

function PersonalInfo() {
  const inputs = usePersonalInfoSelector((state) => state.personalInfo);
  const dispatch = usePersonalInfoDispatch();

  console.log('state: ', inputs);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocation(e.target.value));
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  };
  const handleChangeBirth: DatePickerProps['onChange'] = (_, dateString) => {
    dispatch(setBirth(dateString));
  };
  const handleUploadAvatar = (avatarUrl: string) => {
    dispatch(setAvatar(avatarUrl));
  };

  return (
    <div>
      <FormSectionTitle>Персональна інформація</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item name={'name'} label='Фіо'>
          <Input onChange={handleChangeName} placeholder='Фіо' />
        </Form.Item>
        <Form.Item name={'location'} label='Місце проживання'>
          <Input
            onChange={handleChangeLocation}
            placeholder='Місце проживання'
          />
        </Form.Item>
        <Form.Item label='Номер телефону'>
          <Input onChange={handleChangePhone} placeholder='Номер телефону' />
        </Form.Item>
        <Form.Item name='birh' label='Дата народження'>
          <DatePicker
            onChange={handleChangeBirth}
            placeholder='Дата народження'
          />
        </Form.Item>
        <Form.Item name={'avatar'}>
          <AvatarUpload onUpload={handleUploadAvatar} />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default PersonalInfo;
