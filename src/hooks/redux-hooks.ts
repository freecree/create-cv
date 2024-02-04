import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../store/personal-info/personalInfoStore';
import type { AppDispatch } from '../store/personal-info/personalInfoStore';

export const usePersonalInfoDispatch: () => AppDispatch = useDispatch;
export const usePersonalInfoSelector: TypedUseSelectorHook<RootState> =
  useSelector;
