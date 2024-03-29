import styled from 'styled-components';
import { Button } from 'antd';
import colors from '../../colors';

export const OpenCVButtonStyle = styled(Button)`
  width: 100px;
  height: 100px;
  white-space: break-spaces;
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:disabled {
    background-color: ${colors.main};
    color: ${colors.white};
  }
`;
