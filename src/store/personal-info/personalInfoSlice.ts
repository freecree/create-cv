import { createSlice } from '@reduxjs/toolkit';

export interface PersonalInfoState {
  name: string;
  location: string;
  phone: string;
  birth: string;
  avatar: string;
}

const initialState: PersonalInfoState = {
  name: '',
  location: '',
  phone: '',
  birth: '',
  avatar: '',
};

export const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setBirth: (state, action) => {
      state.birth = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { setName, setLocation, setPhone, setBirth, setAvatar } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
