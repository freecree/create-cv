import { EducationStyle } from './EducationStyle';
import { ReadOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Typography } from 'antd';
import Title from '../title/Title';
import SubTitle from '../sub-title/SubTitle';
import { AccentStyle } from '../CVStyle';

const { Paragraph } = Typography;

function Education() {
  return (
    <EducationStyle>
      <SectionHeading>
        <ReadOutlined />
        <Title size='medium'>Освіта</Title>
      </SectionHeading>
      <div>
        <SubTitle>
          <AccentStyle> Київський політехнічний інститут</AccentStyle>
        </SubTitle>
        <Paragraph>Магістр</Paragraph>
        <Paragraph>
          Дата закінчення - <AccentStyle>01.01.2024</AccentStyle>
        </Paragraph>
      </div>
    </EducationStyle>
  );
}

export default Education;
