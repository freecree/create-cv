import { AvatarStyle } from './AvatarStyle';
import { AvatarProps } from 'antd';

function Avatar({ children }: AvatarProps) {
  return <AvatarStyle size={100}>{children}</AvatarStyle>;
}

export default Avatar;
