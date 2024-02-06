import { Form, Button } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import WorkCard from './WorkCard';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addWork } from '../../slices/workSlice';

function Work() {
  const dispatch = useAppDispatch();

  const handleAddWork = (add: (defaultValue?: unknown) => void) => {
    add();
    dispatch(addWork());
  };

  return (
    <div>
      <FormSectionTitle>Досвід роботи</FormSectionTitle>
      <FormSectionWrapper>
        <Form.List name='works' initialValue={[{}]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <WorkCard key={field.key} field={field} remove={remove} />
              ))}
              <Button type='dashed' onClick={() => handleAddWork(add)} block>
                Додати ще
              </Button>
            </>
          )}
        </Form.List>
      </FormSectionWrapper>
    </div>
  );
}

export default Work;
