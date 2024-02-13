import { Space } from 'antd';
import styled from 'styled-components';
import colors from '../../../colors';

export const PersonalInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  & .ant-space-gap-row-small {
    row-gap: 0px;
  }
`;

export const HeadingStyle = styled(Space)`
  color: ${colors.dark};
  font-size: 16px;
`;
