import { HeadingStyle, PersonalInfoStyle } from './PersonalInfoStyle';
import { Space } from 'antd';
import { Typography } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import SubTitle from '../sub-title/SubTitle';

const { Paragraph } = Typography;

function PersonalInfo() {
  return (
    <PersonalInfoStyle>
      <Space direction='vertical'>
        <SubTitle>Вік</SubTitle>
        <Paragraph>23 роки (27.10.2000)</Paragraph>
      </Space>
      <Space direction='vertical'>
        <HeadingStyle align='center'>
          <EnvironmentOutlined />
          <SubTitle>Місце проживання</SubTitle>
        </HeadingStyle>
        <Paragraph>Київ</Paragraph>
      </Space>
    </PersonalInfoStyle>
  );
}

export default PersonalInfo;
