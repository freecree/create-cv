import { CVButtonStyle } from './CVButtonStyle';
import { ButtonProps } from 'antd';

function CVButton({ onClick }: ButtonProps) {
  return (
    <CVButtonStyle
      type='primary'
      description="Показати прев'ю"
      shape='circle'
      onClick={onClick}
    />
  );
}

export default CVButton;
