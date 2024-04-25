import { SubTitleStyle } from './SubtitleStyle';
import { TitleProps } from 'antd/es/typography/Title';

function SubTitle({ children }: TitleProps) {
  return <SubTitleStyle level={4}>{children}</SubTitleStyle>;
}

export default SubTitle;
