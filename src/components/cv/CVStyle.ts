import styled from 'styled-components';
import { Button } from 'antd';
import { Typography } from 'antd';
import colors from '../../colors';

const { Paragraph } = Typography;

export const CVStyle = styled.div`
  display: flex;
  min-height: 1117.32px;
  width: 791px;
  & .ant-typography {
    margin: 0;
  }
`;

export const DownloadButtonStyle = styled(Button)`
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
`;

export const LeftBarStyle = styled.div`
  padding: 20px;
  width: 30%;
  background-color: #f4f9f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MainContentStyle = styled.div`
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PositionStyle = styled(Paragraph)`
  color: ${colors.dark};
  padding-bottom: 10px;
  border-bottom: 2px solid ${colors.dark};
  font-size: 16px;
`;
