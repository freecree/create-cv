import { SectionHeadingStyle } from './SectionHeadingStyle';
import { SpaceProps } from 'antd';

function SectionHeading({ children }: SpaceProps) {
  return <SectionHeadingStyle align='center'>{children}</SectionHeadingStyle>;
}

export default SectionHeading;
