import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id: Date.now(), ...newUser };
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { data: [], status: 'idle' },
  reducers: {
    deleteUser: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addUser.pending, (state) => {
        state.status = 'adding';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

