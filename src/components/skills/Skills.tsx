import { Form, Select } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import { skillsOptions } from './skillsOption';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setSkills } from '../../slices/skillsSlice';

function Skills() {
  const dispatch = useAppDispatch();

  const handleChangeSkills = (skills: string[]) => {
    dispatch(setSkills(skills));
  };
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
            onChange={handleChangeSkills}
          />
        </Form.Item>
      </FormSectionWrapper>
    </div>
  );
}

export default Skills;
