import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@app/type/class/User/User';

const UserSlice = createSlice({
  initialState: {} as User,
  name: 'user',
  reducers: {
    initialUser: (state, action: PayloadAction<User>) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const {initialUser} = UserSlice.actions;
export default UserSlice.reducer;
