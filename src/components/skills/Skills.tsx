import { Form, Select } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import { skillsOptions } from './skillsOption';

function Skills() {
  return (
    <div>
      <FormSectionTitle>Вміння</FormSectionTitle>
      <FormSectionWrapper>
        <Form.Item
          label='Вміння'
          style={{ width: 'fit-content', minWidth: '170px' }}
        >
          <Select
            placeholder='Оберіть вміння'
            mode='multiple'
            options={skillsOptions}
          />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default Skills;
