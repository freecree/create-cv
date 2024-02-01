import styled from 'styled-components';
import { Card } from 'antd';

export const WorkCardStyle = styled(Card)`
  border: none;
  & .ant-card-body {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    &:after,
    &:before {
      content: none;
    }
  }
  & .ant-card-head,
  & .ant-card-body {
    padding-left: 0;
    padding-right: 0;
  }
`;
