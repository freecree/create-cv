import { TitleStyle, TitleProps } from './TitleStyle';

function Title({ children, size, level }: TitleProps) {
  return (
    <TitleStyle level={level} size={size}>
      {children}
    </TitleStyle>
  );
}

export default Title;
