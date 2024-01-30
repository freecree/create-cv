import { Form } from 'antd';
import PersonalInfo from '../personal-info/PersonalInfo';

function CVForm() {
  return (
    <Form
      name='cv-form'
      style={{ marginTop: '20px' }}
      initialValues={{ remember: true }}
      autoComplete='off'
      layout='vertical'
    >
      <PersonalInfo />
    </Form>
  );
}

export default CVForm;
