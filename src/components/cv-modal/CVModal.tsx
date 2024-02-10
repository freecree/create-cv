import { useState } from 'react';
import { CVModalStyle } from './CVModalStyle';
import CVButton from './cv-button/CVButton';

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
        title='CV Modal'
        open={isModalOpen}
        footer=''
        onCancel={handleCancel}
        width={1000}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CVModalStyle>
    </>
  );
}

export default CVModal;
