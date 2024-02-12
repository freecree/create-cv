import styled from 'styled-components';
import { Typography } from 'antd';
import colors from '../../../colors';

const { Paragraph } = Typography;

export const PositionStyle = styled(Paragraph)`
  color: ${colors.dark};
  padding-bottom: 10px;
  border-bottom: 2px solid ${colors.dark};
  font-size: 16px;
`;
