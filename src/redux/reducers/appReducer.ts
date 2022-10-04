
  import { createSlice } from '@reduxjs/toolkit';


  const initialState: any = {
    defaultStates: {
      isLoading: false,
      message: '',
      action: '',
      success: false
    },
    data: []
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStates: (state, action: any) => {

          state.defaultStates = action.payload
        },
        setApp: (state, action: any) => {
          state.data = action.payload;
        }
    },
});

export const { setAppStates, setApp } = appSlice.actions;
export const getApp = (state: any) => state.app;
export default appSlice.reducer;