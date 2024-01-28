import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-main);
  color: var(--color-white);
  padding: 30px 50px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Create CV</Title>
      <div>by Bohdan Sidorov</div>
    </HeaderWrapper>
  );
}

export default Header;
