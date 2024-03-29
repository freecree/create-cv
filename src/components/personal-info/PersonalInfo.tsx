import { Form, Input } from 'antd';
import AvatarUpload from '../avatar-upload/AvatarUpload';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import DatePicker from '../date-picker/DatePicker';
import type { DatePickerProps } from 'antd';
import { useAppDispatch } from '../../hooks/redux-hooks';
import {
  setName,
  setLocation,
  setPhone,
  setBirth,
  setAvatar,
} from '../../slices/personalInfoSlice';
import PhoneCountryInput from '../phone-input/PhoneInput';

function PersonalInfo() {
  const dispatch = useAppDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocation(e.target.value));
  };

  const handleChangePhone = (phoneValue: string) => {
    dispatch(setPhone(phoneValue));
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
        <Form.Item name={'name'} label='Фіо' rules={[{ required: true }]}>
          <Input onChange={handleChangeName} placeholder='Фіо' />
        </Form.Item>
        <Form.Item
          name={'location'}
          label='Місце проживання'
          rules={[{ required: true }]}
        >
          <Input
            onChange={handleChangeLocation}
            placeholder='Місце проживання'
          />
        </Form.Item>
        <Form.Item
          label='Номер телефону'
          name='phone'
          rules={[{ required: true }]}
        >
          <PhoneCountryInput onChange={handleChangePhone} />
        </Form.Item>
        <Form.Item
          name='birh'
          label='Дата народження'
          rules={[{ required: true }]}
        >
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
