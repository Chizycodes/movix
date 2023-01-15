import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	loading: false,
	user: {},
	token: null,
	error: null,
	msg: null,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (user) => {
	return await axios
		.post('/api/users/register', user)
		.then((res) => {
			console.log(res.data, 'register');
			return res.data;
		})
		.catch((err) => console.log(err));
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {},
});

export default authSlice.reducer;
