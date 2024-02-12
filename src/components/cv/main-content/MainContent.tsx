import { MainContentStyle } from './MainContentStyle';

interface MainContentProps {
  children?: React.ReactNode;
}

function MainContent({ children }: MainContentProps) {
  return <MainContentStyle>{children}</MainContentStyle>;
}

export default MainContent;
