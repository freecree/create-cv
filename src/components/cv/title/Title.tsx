import { TitleStyle } from './TitleStyle';
import { TitleProps as AntTitleProps } from 'antd/es/typography/Title';

export type Size = 'small' | 'medium' | 'large';

interface TitleProps extends AntTitleProps {
  size: Size;
}

function Title({ children, size, level }: TitleProps) {
  return (
    <TitleStyle level={level} size={size}>
      {children}
    </TitleStyle>
  );
}

export default Title;
