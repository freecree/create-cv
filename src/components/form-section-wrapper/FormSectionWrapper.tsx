import { FormSectionWrapperStyle } from './FormSectionWrapperStyle';
import { ReactNode } from 'react';

function FormSectionWrapper({ children }: { children: ReactNode }) {
  return <FormSectionWrapperStyle>{children}</FormSectionWrapperStyle>;
}

export default FormSectionWrapper;
