import { SkillsStyle } from './SkillsStyle';
import { ToolOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Tag, Space } from 'antd';
import Title from '../title/Title';
import { useAppSelector } from '../../../hooks/redux-hooks';

function Skills() {
  const skills = useAppSelector((state) => state.skills.skills);

  return (
    <SkillsStyle>
      <SectionHeading>
        <ToolOutlined />
        <Title size='medium'>Навички</Title>
      </SectionHeading>
      <Space direction='vertical'>
        {skills.map((skill, i) => (
          <Tag key={i} color='blue'>
            {skill}
          </Tag>
        ))}
      </Space>
    </SkillsStyle>
  );
}

export default Skills;
