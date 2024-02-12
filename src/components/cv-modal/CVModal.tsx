import { useState } from 'react';
import { CVModalStyle } from './CVModalStyle';
import CVButton from './cv-button/CVButton';
import CV from '../cv/CV';

function CVModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CVButton onClick={showModal} />
      <CVModalStyle
        open={isModalOpen}
        footer=''
        onCancel={handleCancel}
        width={1000}
      >
        <CV />
      </CVModalStyle>
    </>
  );
}

export default CVModal;
