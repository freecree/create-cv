import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import Avatar from './avatar/Avatar';
import PersonalInfo from './personal-info/PersonalInfo';
import Skills from './skills/Skills';
import Title from './title/Title';
import Education from './education/Education';
import WorkExperience from './work-experience/WorkExperience';
import {
  CVStyle,
  DownloadButtonStyle,
  LeftBarStyle,
  MainContentStyle,
  PositionStyle
} from './CVStyle';

function CV() {
  const cvRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <>
      <DownloadButtonStyle onClick={handlePrint}>Скачати</DownloadButtonStyle>
      <CVStyle ref={cvRef}>
        <LeftBarStyle>
          <Avatar>U</Avatar>
          <PersonalInfo />
          <Skills />
        </LeftBarStyle>
        <MainContentStyle>
          <Title level={1} size='large'>
            Микола Володимирович
          </Title>
          <PositionStyle>Frontend developer</PositionStyle>
          <Education />
          <WorkExperience />
        </MainContentStyle>
      </CVStyle>
    </>
  );
}

export default CV;
