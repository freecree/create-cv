import { HeadingStyle, PersonalInfoStyle } from './PersonalInfoStyle';
import { Space } from 'antd';
import { Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import SubTitle from '../sub-title/SubTitle';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { calculateAge, getPluralYears } from './utils';

const { Paragraph } = Typography;

function PersonalInfo() {
  const birthDate = useAppSelector((state) => state.personalInfo.birth);
  const location = useAppSelector((state) => state.personalInfo.location);
  const phone = useAppSelector((state) => state.personalInfo.phone);

  const age = calculateAge(birthDate);

  return (
    <PersonalInfoStyle>
      <Space direction='vertical'>
        <SubTitle>Вік</SubTitle>
        {age > 0 && (
          <Paragraph>
            {age} {getPluralYears(age)} ({birthDate})
          </Paragraph>
        )}
      </Space>
      <Space direction='vertical'>
        <HeadingStyle align='center'>
          <EnvironmentOutlined />
          <SubTitle>Місце проживання</SubTitle>
        </HeadingStyle>
        <Paragraph>{location}</Paragraph>
      </Space>
      <Space direction='vertical'>
        <HeadingStyle align='center'>
          <PhoneOutlined />
          <SubTitle>{phone}</SubTitle>
        </HeadingStyle>
      </Space>
    </PersonalInfoStyle>
  );
}

export default PersonalInfo;
