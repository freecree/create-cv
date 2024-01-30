import { FormSectionTitleStyle } from './FormSectionTitleStyle';
import { ReactNode } from 'react';

function FormSectionTitle({ children }: { children: ReactNode }) {
  return <FormSectionTitleStyle level={2}>{children}</FormSectionTitleStyle>;
}

export default FormSectionTitle;
