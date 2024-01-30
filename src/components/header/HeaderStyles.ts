import styled from 'styled-components';
import colors from '../../colors';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.main};
  color: ${colors.white};
  padding: 30px 50px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 18px;
`;

export const Title = styled.h1`
  font-size: 30px;
`;
