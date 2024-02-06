import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Work {
  company: string;
  position: string;
  workPeriod: string[];
  description: string;
}

const initialWork: Work = {
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
      state.works.push(initialWork);
    },
    removeWork: (state, action) => {
      state.works.splice(action.payload, 1);
    },
    setCompany: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      const { index, value } = action.payload;
      state.works[index].company = value;
    },
    setPosition: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      const { index, value } = action.payload;
      state.works[index].position = value;
    },
    setWorkPeriod: (
      state,
      action: PayloadAction<{ index: number; value: string[] }>,
    ) => {
      const { index, value } = action.payload;
      state.works[index].workPeriod = value;
    },
    setDescription: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      const { index, value } = action.payload;
      state.works[index].description = value;
    },
  },
});

export const { addWork, removeWork, setCompany, setPosition, setWorkPeriod, setDescription } = worksSlice.actions;
export default worksSlice.reducer;
