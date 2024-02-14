import styled from 'styled-components';
import { Typography } from 'antd';
import colors from '../../../colors';

const { Title } = Typography;

export const SubTitleStyle = styled(Title)`
  &.ant-typography {
    font-size: 16px;
    color: ${colors.dark};
  }
`;
