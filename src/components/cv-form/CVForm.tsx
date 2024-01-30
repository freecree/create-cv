import { Form } from 'antd';
import PersonalInfo from '../personal-info/PersonalInfo';
import Education from '../education/Education';

function CVForm() {
  return (
    <Form
      name='cv-form'
      style={{ marginTop: '20px', paddingBottom: '50px' }}
      initialValues={{ remember: true }}
      autoComplete='off'
      layout='vertical'
    >
      <PersonalInfo />
      <Education />
    </Form>
  );
}

export default CVForm;
