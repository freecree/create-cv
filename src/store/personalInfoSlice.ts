import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PersonalInfoState {
  name: string;
}

const initialState: PersonalInfoState = {
  name: '',
};

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoSlice.reducer,
  },
});

export const { setName } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;
