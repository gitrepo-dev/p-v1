
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

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserStates: (state, action: any) => {
          state.defaultStates = action.payload
        },
        setUser: (state, action: any) => {
          state.data = action.payload;
        }
    },
});

export const { setUserStates, setUser } = userSlice.actions;
export const getUser = (state: any) => state.user;
export default userSlice.reducer;