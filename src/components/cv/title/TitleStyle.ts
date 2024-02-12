import styled from 'styled-components';
import { Typography } from 'antd';
import colors from '../../../colors';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';

const { Title } = Typography;

export interface TitleProps extends AntTitleProps {
  size: 'small' | 'medium' | 'large';
}

const sizes = {
  small: '14px',
  medium: '18px',
  large: '25px',
};

export const TitleStyle = styled(Title)<TitleProps>`
  &.ant-typography {
    font-size: ${(props) => sizes[props.size]};
    font-size: '30px';
    color: ${colors.dark};
    text-transform: uppercase;
  }
  &.ant-typography + .ant-typography {
    margin: 0;
  }
`;
