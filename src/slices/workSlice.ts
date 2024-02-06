import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export interface Work {
  id: string;
  company: string;
  position: string;
  workPeriod: string[];
  description: string;
}

const initialWork: Work = {
  id: nanoid(),
  company: '',
  position: '',
  workPeriod: [],
  description: '',
};

export interface WorkState {
  works: Work[];
}

const initialState: WorkState = { works: [initialWork] };

export const worksSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    addWork: (state) => {
      state.works.push({ ...initialWork, id: nanoid() });
    },
    removeWork: (state, action) => {
      const updatedWorks = state.works.filter(
        (work) => work.id !== action.payload,
      );
      state.works = updatedWorks;
    },
    setCompany: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const { id, value } = action.payload;
      const workIndex = state.works.findIndex((work) => work.id === id);
      if (workIndex !== -1) {
        state.works[workIndex].company = value;
      }
    },
    setPosition: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const { id, value } = action.payload;
      const workIndex = state.works.findIndex((work) => work.id === id);
      if (workIndex !== -1) {
        state.works[workIndex].position = value;
      }
    },
    setWorkPeriod: (
      state,
      action: PayloadAction<{ id: string; value: string[] }>,
    ) => {
      const { id, value } = action.payload;
      const workIndex = state.works.findIndex((work) => work.id === id);
      if (workIndex !== -1) {
        state.works[workIndex].workPeriod = value;
      }
    },
    setDescription: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const { id, value } = action.payload;
      const workIndex = state.works.findIndex((work) => work.id === id);
      if (workIndex !== -1) {
        state.works[workIndex].description = value;
      }
    },
  },
});

export const {
  addWork,
  removeWork,
  setCompany,
  setPosition,
  setWorkPeriod,
  setDescription,
} = worksSlice.actions;
export default worksSlice.reducer;
