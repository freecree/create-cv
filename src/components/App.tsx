import CVForm from './cv-form/CVForm';
import Header from './header/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 85%;
  padding-left: 20px;
  padding-right: 20px;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <CVForm />
    </AppWrapper>
  );
}

export default App;
