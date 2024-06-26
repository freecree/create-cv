import { createSlice } from '@reduxjs/toolkit';

export interface EducationState {
  institution: string;
  graduationDate: string;
  degree: 'бакалавр' | 'магістр';
}

const initialState: EducationState = {
  institution: '',
  graduationDate: '',
  degree: 'бакалавр',
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    setInstitution: (state, action) => {
      state.institution = action.payload;
    },
    setGraduationDate: (state, action) => {
      state.graduationDate = action.payload;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
  },
});

export const { setInstitution, setGraduationDate, setDegree } =
  educationSlice.actions;
export default educationSlice.reducer;
