import { EducationStyle } from './EducationStyle';
import { ReadOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Typography } from 'antd';
import Title from '../title/Title';
import SubTitle from '../sub-title/SubTitle';
import { AccentStyle } from '../CVStyle';
import { useAppSelector } from '../../../hooks/redux-hooks';

const { Paragraph } = Typography;

function Education() {
  const institution = useAppSelector((state) => state.education.institution);
  const degree = useAppSelector((state) => state.education.degree);
  const graduateionDate = useAppSelector(
    (state) => state.education.graduationDate,
  );

  return (
    <EducationStyle>
      <SectionHeading>
        <ReadOutlined />
        <Title size='medium'>Освіта</Title>
      </SectionHeading>
      <div>
        <SubTitle>
          <AccentStyle>{institution}</AccentStyle>
        </SubTitle>
        <Paragraph>{degree}</Paragraph>
        <Paragraph>
          Дата закінчення - <AccentStyle>{graduateionDate}</AccentStyle>
        </Paragraph>
      </div>
    </EducationStyle>
  );
}

export default Education;
