import { CVModalStyle } from './CVModalStyle';
import CV from '../cv/CV';

interface CVModalProps {
  isModalOpen: boolean;
  onCancel?: () => void;
}

function CVModal({ isModalOpen, onCancel }: CVModalProps) {
  return (
    <>
      <CVModalStyle
        open={isModalOpen}
        footer={''}
        onCancel={onCancel}
        width={820}
      >
        <CV />
      </CVModalStyle>
    </>
  );
}

export default CVModal;
