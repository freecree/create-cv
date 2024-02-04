import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PersonalInfoState {
  name: string;
  location: string;
  phone: string;
}

const initialState: PersonalInfoState = {
  name: '',
  location: '',
  phone: '',
};

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    updateValues: (state, action: PayloadAction<PersonalInfoState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setName, updateValues } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
