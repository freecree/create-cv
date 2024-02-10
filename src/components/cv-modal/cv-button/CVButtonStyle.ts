import styled from 'styled-components';
import { FloatButton } from 'antd';
import colors from '../../../colors';

export const CVButtonStyle = styled(FloatButton)`
  width: 100px;
  height: 100px;
  & .ant-float-btn-body {
    background-color: ${colors.main};
  }
`;
