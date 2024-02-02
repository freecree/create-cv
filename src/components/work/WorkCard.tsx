import { Form, Input, FormListFieldData, DatePicker } from 'antd';
import { WorkCardStyle } from './WorkCardStyle';
import { CloseOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface WorkCardProps {
  field: FormListFieldData;
  remove: (index: number | number[]) => void;
}

function WorkCard({ field, remove }: WorkCardProps) {
  return (
    <WorkCardStyle
      size='small'
      title={`Місце роботи ${field.name + 1}`}
      key={field.key}
      extra={
        field.name > 0 && (
          <CloseOutlined
            onClick={() => {
              remove(field.name);
            }}
          />
        )
      }
    >
      <Form.Item label='Компанія'>
        <Input placeholder='Компанія' />
      </Form.Item>
      <Form.Item label='Посада'>
        <Input placeholder='Посада' />
      </Form.Item>
      <Form.Item label='Період роботи'>
        <RangePicker locale={locale} placeholder={['Початок', 'Кінець']} />
      </Form.Item>
      <Form.Item label='Період роботи'>
        <TextArea rows={4} />
      </Form.Item>
    </WorkCardStyle>
  );
}

export default WorkCard;
