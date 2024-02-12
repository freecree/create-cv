import { ButtonProps } from 'antd';
import { DownloadButtonStyle } from './DownloadButtonStyle';

function DownloadButton({ onClick }: ButtonProps) {
  return <DownloadButtonStyle onClick={onClick}>Скачати</DownloadButtonStyle>;
}

export default DownloadButton;
