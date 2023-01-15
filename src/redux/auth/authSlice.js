import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	loading: false,
	user: {},
	token: null,
	error: null,
	msg: null,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
	return await axios
		.post('/api/users/register', data)
		.then((res) => {
			console.log(res.data, 'register');
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			// return err;
		});
});



const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[registerUser.pending]: (state, action) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.msg = action.payload.msg;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},
	},
});

export default authSlice.reducer;
