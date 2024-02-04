import type { PersonalInfoState } from '../store/personal-info/personalInfoSlice';
import { usePersonalInfoSelector } from './redux-hooks';
import { updateValues } from '../store/personal-info/personalInfoSlice';
import { usePersonalInfoDispatch } from './redux-hooks';

export const usePersonalInfo = () => {
  const values = usePersonalInfoSelector((state) => state.personalInfo);
  const dispatch = usePersonalInfoDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log('usePersInfo: ', value, name);
    dispatch(updateValues({ ...values, [name]: value }));
  };
  const register = (name: keyof PersonalInfoState) => ({
    value: values[name],
    onChange: handleChange,
    name: name,
  });
  return { register };
};
