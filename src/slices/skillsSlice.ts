import { createSlice } from '@reduxjs/toolkit';

export interface EducationState {
  skills: string[];
}

const initialState: EducationState = {
  skills: [],
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
