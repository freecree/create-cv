import { EducationStyle } from './EducationStyle';
import { ReadOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Typography } from 'antd';
import Title from '../title/Title';

const { Paragraph } = Typography;

function Education() {
  return (
    <EducationStyle>
      <SectionHeading>
        <ReadOutlined />
        <Title size='medium'>Освіта</Title>
      </SectionHeading>
      <div>
        <Title size='small'>Київський політехнічний інститут</Title>
        <Paragraph>Магістр</Paragraph>
        <Paragraph>Дата закінчення - 01.01.2024</Paragraph>
      </div>
    </EducationStyle>
  );
}

export default Education;
