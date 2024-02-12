import { LeftBarStyle } from './LeftBarStyle';

interface LeftBarProps {
  children?: React.ReactNode;
}

function LeftBar({ children }: LeftBarProps) {
  return <LeftBarStyle>{children}</LeftBarStyle>;
}

export default LeftBar;
