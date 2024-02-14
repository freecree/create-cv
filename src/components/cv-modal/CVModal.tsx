import { useState } from 'react';
import { CVModalStyle } from './CVModalStyle';
import { CVButtonStyle } from './CVModalStyle';
import CV from '../cv/CV';

function CVModal() {
  const [isOpenPreviewCV, setIsOpenPreviewCV] = useState(false);

  const showCVPreview = () => {
    setIsOpenPreviewCV(true);
  };

  const handleCancel = () => {
    setIsOpenPreviewCV(false);
  };

  return (
    <>
      <CVButtonStyle
        type='primary'
        description="Показати прев'ю"
        shape='circle'
        onClick={showCVPreview}
      />
      <CVModalStyle
        open={isOpenPreviewCV}
        footer={''}
        onCancel={handleCancel}
        width={820}
      >
        <CV />
      </CVModalStyle>
    </>
  );
}

export default CVModal;
