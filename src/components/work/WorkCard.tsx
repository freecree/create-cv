import { Form, Input, DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import { WorkCardStyle } from './WorkCardStyle';
import { CloseOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { Work } from '../../slices/workSlice';
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
  field: Work;
  index: number;
}

function WorkCard({ field, index }: WorkCardProps) {
  const dispatch = useAppDispatch();

  const handleRemoveWork = (id: string) => {
    dispatch(removeWork(id));
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompany({ id: field.id, value: e.target.value }));
  };

  const handleChangePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPosition({ id: field.id, value: e.target.value }));
  };

  const handleChangeWorkPeriod: RangePickerProps['onChange'] = (
    _,
    dateStrings,
  ) => {
    dispatch(setWorkPeriod({ id: field.id, value: dateStrings }));
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(setDescription({ id: field.id, value: e.target.value }));
  };

  return (
    <WorkCardStyle
      size='small'
      title={`Місце роботи ${index + 1}`}
      extra={
        index > 0 && (
          <CloseOutlined onClick={() => handleRemoveWork(field.id)} />
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
