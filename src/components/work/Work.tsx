import { Button } from 'antd';
import FormSectionTitle from '../form-section-title/FormSectionTitle';
import FormSectionWrapper from '../form-section-wrapper/FormSectionWrapper';
import WorkCard from './WorkCard';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAppSelector } from '../../hooks/redux-hooks';
import { addWork } from '../../slices/workSlice';

function Work() {
  const dispatch = useAppDispatch();
  const works = useAppSelector((state) => state.work.works);

  const handleAddWork = () => {
    dispatch(addWork());
  };

  return (
    <div>
      <FormSectionTitle>Досвід роботи</FormSectionTitle>
      <FormSectionWrapper>
        <>
          {works.map((work, i) => (
            <WorkCard key={work.id} field={work} index={i} />
          ))}
          <Button type='dashed' onClick={handleAddWork} block>
            Додати ще
          </Button>
        </>
      </FormSectionWrapper>
    </div>
  );
}

export default Work;
