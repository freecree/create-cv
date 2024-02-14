import styled from 'styled-components';
import { Modal } from 'antd';
import { FloatButton } from 'antd';
import colors from '../../colors';

export const CVModalStyle = styled(Modal)`
  & .ant-modal-content {
    width: 820px;
  }
`;

export const CVButtonStyle = styled(FloatButton)`
  width: 100px;
  height: 100px;
  & .ant-float-btn-body {
    background-color: ${colors.main};
  }
`;
