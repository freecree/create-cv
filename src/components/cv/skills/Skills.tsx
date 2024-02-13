import { SkillsStyle } from './SkillsStyle';
import { ToolOutlined } from '@ant-design/icons';
import SectionHeading from '../section-heading/SectionHeading';
import { Tag, Space } from 'antd';
import Title from '../title/Title';

function Skills() {
  return (
    <SkillsStyle>
      <SectionHeading>
        <ToolOutlined />
        <Title size='medium'>Навички</Title>
      </SectionHeading>
      <Space direction='vertical'>
        <Tag color='blue'>React</Tag>
        <Tag color='blue'>Typescript</Tag>
        <Tag color='blue'>Redux Toolkit</Tag>
        <Tag color='blue'>SCSS</Tag>
      </Space>
    </SkillsStyle>
  );
}

export default Skills;
