import styled from 'styled-components';
import { Typography } from 'antd';
import type { Size } from './Title';
import colors from '../../../colors';

const { Title } = Typography;

const sizes = {
  small: '14px',
  medium: '18px',
  large: '25px',
};

export const TitleStyle = styled(Title)<{ size: Size }>`
  &.ant-typography {
    font-size: ${(props) => sizes[props.size]};
    color: ${colors.dark};
    text-transform: uppercase;
  }
  &.ant-typography + .ant-typography {
    margin: 0;
  }
`;
