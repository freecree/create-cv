import { WorkCardStyle, WorkDescriptionStyle } from './WorkCardStyle';
import { CalendarOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import SubTitle from '../sub-title/SubTitle';
import { AccentStyle } from '../CVStyle';

const { Paragraph } = Typography;

function WorkCard() {
  return (
    <WorkCardStyle>
      <div>
        <SubTitle>
          <AccentStyle> Frontend developer</AccentStyle>
        </SubTitle>
        <SubTitle>Softserve</SubTitle>
        <WorkDescriptionStyle>
          <AccentStyle>
            <CalendarOutlined />
          </AccentStyle>
          <Paragraph>
            <AccentStyle>01.02.2024 - 02.03.2024</AccentStyle>
          </Paragraph>
        </WorkDescriptionStyle>
        <Paragraph>Опис</Paragraph>
      </div>
    </WorkCardStyle>
  );
}

export default WorkCard;
