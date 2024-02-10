import { Form } from 'antd';
import PersonalInfo from '../personal-info/PersonalInfo';
import Education from '../education/Education';
import Skills from '../skills/Skills';
import Work from '../work/Work';
import CVModal from '../cv-modal/CVModal';

function CVForm() {
  return (
    <Form
      style={{ marginTop: '20px', paddingBottom: '50px' }}
      layout='vertical'
    >
      <PersonalInfo />
      <Education />
      <Skills />
      <Work />
      <CVModal />
    </Form>
  );
}

export default CVForm;
