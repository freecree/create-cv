import { Form } from 'antd';
import PersonalInfo from '../personal-info/PersonalInfo';
import Education from '../education/Education';
import Skills from '../skills/Skills';
import Work from '../work/Work';

function CVForm() {
  const handleFormChange = (e: unknown) => {
    console.log('on form change', e);
  };

  return (
    <Form
      onValuesChange={handleFormChange}
      name='cv-form'
      style={{ marginTop: '20px', paddingBottom: '50px' }}
      initialValues={{ remember: true }}
      autoComplete='off'
      layout='vertical'
    >
      <PersonalInfo />
      <Education />
      <Skills />
      <Work />
    </Form>
  );
}

export default CVForm;
