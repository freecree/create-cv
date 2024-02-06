import { Form, Input, FormListFieldData, DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import { WorkCardStyle } from './WorkCardStyle';
import { CloseOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  removeWork,
  setCompany,
  setPosition,
  setWorkPeriod,
  setDescription,
} from '../../slices/workSlice';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface WorkCardProps {
  field: FormListFieldData;
  remove: (index: number | number[]) => void;
}

function WorkCard({ field, remove }: WorkCardProps) {
  const dispatch = useAppDispatch();

  const workState = useAppSelector((state) => state.work);
  console.log('Works in state: ', workState.works);

  const handleRemoveWork = (index: number) => {
    remove(index);
    dispatch(removeWork(index));
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompany({ index: field.name, value: e.target.value }));
  };

  const handleChangePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPosition({ index: field.name, value: e.target.value }));
  };

  const handleChangeWorkPeriod: RangePickerProps['onChange'] = (
    _,
    dateStrings,
  ) => {
    dispatch(setWorkPeriod({ index: field.name, value: dateStrings }));
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(setDescription({ index: field.name, value: e.target.value }));
  };

  return (
    <WorkCardStyle
      size='small'
      title={`Місце роботи ${field.name + 1}`}
      extra={
        field.name > 0 && (
          <CloseOutlined onClick={() => handleRemoveWork(field.name)} />
        )
      }
    >
      <Form.Item label='Компанія'>
        <Input onChange={handleChangeCompany} placeholder='Компанія' />
      </Form.Item>
      <Form.Item label='Посада'>
        <Input onChange={handleChangePosition} placeholder='Посада' />
      </Form.Item>
      <Form.Item label='Період роботи'>
        <RangePicker
          onChange={handleChangeWorkPeriod}
          locale={locale}
          placeholder={['Початок', 'Кінець']}
        />
      </Form.Item>
      <Form.Item label='Опис'>
        <TextArea rows={4} onChange={handleChangeDescription} />
      </Form.Item>
    </WorkCardStyle>
  );
}

export default WorkCard;
