import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import Avatar from './avatar/Avatar';
import PersonalInfo from './personal-info/PersonalInfo';
import Skills from './skills/Skills';
import DownloadButton from './download-button/DownloadButton';
import { CVStyle } from './CVStyle';
import LeftBar from './left-bar/LeftBar';
import MainContent from './main-content/MainContent';
import Title from './title/Title';
import Position from './position/Position';
import Education from './education/Education';
import WorkExperience from './work-experience/WorkExperience';

function CV() {
  const cvRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <>
      <DownloadButton onClick={handlePrint}>Скачати</DownloadButton>
      <CVStyle ref={cvRef}>
        <LeftBar>
          <Avatar>U</Avatar>
          <PersonalInfo />
          <Skills />
        </LeftBar>
        <MainContent>
          <Title level={1} size='large'>
            Микола Володимирович
          </Title>
          <Position>Frontend developer</Position>
          <Education />
          <WorkExperience />
        </MainContent>
      </CVStyle>
    </>
  );
}

export default CV;
