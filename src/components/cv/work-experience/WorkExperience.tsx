import { WorkExperienceStyle } from './WorkExperienceStyle';
import { LaptopOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import Title from '../title/Title';
import WorkCard from '../work-card/WorkCard';

function WorkExperience() {
  return (
    <WorkExperienceStyle>
      <SectionHeading>
        <LaptopOutlined />
        <Title size='medium'>Досвід роботи</Title>
      </SectionHeading>
      <WorkCard />
    </WorkExperienceStyle>
  );
}

export default WorkExperience;
