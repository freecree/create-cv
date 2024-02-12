import { PositionStyle } from './PositionStyle';
import type { TitleProps } from 'antd/es/typography/Title';

function Position({ children }: TitleProps) {
  return <PositionStyle>{children}</PositionStyle>;
}

export default Position;
