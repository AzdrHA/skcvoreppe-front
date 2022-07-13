import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@app/type/class/User/User';

const UserSlice = createSlice({
  initialState: {},
  name: 'user',
  reducers: {
    initialUser: (state, action: PayloadAction<User>) => {
      state = Object.assign(state, action);
    },
  },
});
export default UserSlice;
