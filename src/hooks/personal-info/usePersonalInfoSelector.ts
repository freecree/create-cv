import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState } from '../../store/personal-info/personalInfoStore';

export const usePersonalInfoSelector: TypedUseSelectorHook<RootState> =
  useSelector;
