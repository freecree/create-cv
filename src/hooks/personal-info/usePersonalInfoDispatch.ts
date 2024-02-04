import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/personal-info/personalInfoStore';

export const usePersonalInfoDispatch: () => AppDispatch = useDispatch;
