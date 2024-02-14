import { useAppSelector } from '../../../hooks/redux-hooks';
import { AvatarStyle } from './AvatarStyle';
import { AvatarProps } from 'antd';

function Avatar({ children }: AvatarProps) {
  const avatarSrc = useAppSelector((state) => state.personalInfo.avatar);

  return (
    <AvatarStyle src={avatarSrc} size={100}>
      {children}
    </AvatarStyle>
  );
}

export default Avatar;
