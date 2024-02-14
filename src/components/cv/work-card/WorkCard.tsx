import { WorkCardStyle, WorkDescriptionStyle } from './WorkCardStyle';
import { CalendarOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import SubTitle from '../sub-title/SubTitle';
import { AccentStyle } from '../CVStyle';
import type { Work } from '../../../slices/workSlice';

const { Paragraph } = Typography;

function WorkCard({ work }: { work: Work }) {
  return (
    <WorkCardStyle>
      <div>
        <SubTitle>
          <AccentStyle>{work.position}</AccentStyle>
        </SubTitle>
        <SubTitle>{work.company}</SubTitle>
        <WorkDescriptionStyle>
          <AccentStyle>
            <CalendarOutlined />
          </AccentStyle>
          <Paragraph>
            <AccentStyle>
              {work.workPeriod[0]} - {work.workPeriod[1]}
            </AccentStyle>
          </Paragraph>
        </WorkDescriptionStyle>
        <Paragraph>{work.description}</Paragraph>
      </div>
    </WorkCardStyle>
  );
}

export default WorkCard;
