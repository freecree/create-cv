import { Form } from 'antd';
import PersonalInfo from '../personal-info/PersonalInfo';
import Education from '../education/Education';
import Skills from '../skills/Skills';
import Work from '../work/Work';
import CVModal from '../cv-modal/CVModal';
import { OpenCVButtonStyle } from './CVFormStyle';
import { useEffect, useState } from 'react';

function CVForm() {
  const [form] = Form.useForm();
  const [isOpenPreviewCV, setIsOpenPreviewCV] = useState(false);
  const [submittable, setSubmittable] = useState<boolean>(false);

  const handleSubmit = () => {
    if (submittable) {
      setIsOpenPreviewCV(true);
    }
  };

  const closeCVPreview = () => {
    setIsOpenPreviewCV(false);
  };
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const validateMessages = {
    required: "Поле '${label}' обов'язкове для введення!",
    string: {
      min: "Поле '${label}' повинне містити не менше ${min} символів",
    },
  };

  return (
    <Form
      style={{ marginTop: '20px', paddingBottom: '50px' }}
      layout='vertical'
      form={form}
      validateMessages={validateMessages}
    >
      <PersonalInfo />
      <Education />
      <Skills />
      <Work />
      <OpenCVButtonStyle
        type='primary'
        shape='circle'
        onClick={handleSubmit}
        htmlType='submit'
        // disabled={!submittable}
      >
        Показати прев'ю
      </OpenCVButtonStyle>
      <CVModal isModalOpen={isOpenPreviewCV} onCancel={closeCVPreview} />
    </Form>
  );
}

export default CVForm;
