import { WorkExperienceStyle } from './WorkExperienceStyle';
import { LaptopOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import Title from '../title/Title';
import WorkCard from '../work-card/WorkCard';
import { useAppSelector } from '../../../hooks/redux-hooks';

function WorkExperience() {
  const works = useAppSelector((state) => state.work.works);

  return (
    <WorkExperienceStyle>
      <SectionHeading>
        <LaptopOutlined />
        <Title size='medium'>Досвід роботи</Title>
      </SectionHeading>
      {works.map((work) => (
        <WorkCard work={work} key={work.id} />
      ))}
    </WorkExperienceStyle>
  );
}

export default WorkExperience;
