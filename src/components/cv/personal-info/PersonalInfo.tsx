import { PersonalInfoStyle } from './PersonalInfoStyle';
import { Space } from 'antd';
import { Typography } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function PersonalInfo() {
  return (
    <PersonalInfoStyle>
      <Space direction='vertical'>
        <Title level={3}>Вік</Title>
        <Paragraph>23 роки (27.10.2000)</Paragraph>
      </Space>
      <Space direction='vertical'>
        <Space align='center'>
          <EnvironmentOutlined />
          <Title level={3}>Місце проживання</Title>
        </Space>
        <Paragraph>Київ</Paragraph>
      </Space>
    </PersonalInfoStyle>
  );
}

export default PersonalInfo;
