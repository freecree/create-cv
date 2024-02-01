import { Form, Button } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import WorkCard from './WorkCard';

function Work() {
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
              <Button type='dashed' onClick={() => add()} block>
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
