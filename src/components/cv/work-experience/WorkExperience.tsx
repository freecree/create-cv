import { WorkExperienceStyle } from './WorkExperienceStyle';
import { LaptopOutlined } from '@ant-design/icons';
import { CalendarOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Space, Typography } from 'antd';
import Title from '../title/Title';

const { Paragraph } = Typography;

function WorkExperience() {
  return (
    <WorkExperienceStyle>
      <SectionHeading>
        <LaptopOutlined />
        <Title size='medium'>Досвід роботи</Title>
      </SectionHeading>
      <div>
        <Title size='small'>Softserve</Title>
        <Paragraph>Frontend developer</Paragraph>
        <Space>
          <CalendarOutlined />
          <Paragraph>01.02.2024 - 02.03.2024</Paragraph>
        </Space>
        <Paragraph>Опис</Paragraph>
      </div>
    </WorkExperienceStyle>
  );
}

export default WorkExperience;
