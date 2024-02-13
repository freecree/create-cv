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
  PositionStyle,
} from './CVStyle';
import { useAppSelector } from '../../hooks/redux-hooks';

function CV() {
  const cvRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });
  const name = useAppSelector((state) => state.personalInfo.name);

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
          <div>
            <Title level={1} size='large'>
              {name}
            </Title>
            <PositionStyle>Frontend developer</PositionStyle>
          </div>
          <Education />
          <WorkExperience />
        </MainContentStyle>
      </CVStyle>
    </>
  );
}

export default CV;
