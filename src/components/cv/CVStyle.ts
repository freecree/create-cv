import styled from 'styled-components';

export const CVStyle = styled.div`
  display: flex;
  min-height: 1117.32px;
  width: 791px;
  & .ant-typography {
    margin: 0;
  }
  @media print {
    @page {
      size: 100% 100%;
    }
  }
`;
