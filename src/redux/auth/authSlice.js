import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const initialState = {
	loading: false,
	user: null,
	error: null,
	msg: null,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
	return await createUserWithEmailAndPassword(auth, data.email, data.password, data.name)
		.then((res) => {
			console.log(res, 'register');
			toast.success('Registration Successful');
			return res;
		})
		.catch((err) => {
			const error = { ...err };
			console.log(error, 'error');
			toast.error(error.code);
			return error;
		});
});

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
	return await signInWithEmailAndPassword(auth, data.email, data.password)
		.then((res) => {
			console.log(res, 'login');
			toast.success('Login Successful');
			return res;
		})
		.catch((err) => {
			const error = { ...err };
			console.log(error, 'error');
			toast.error(error.code);
			return error;
		});
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		getUser: (state) => {
			onAuthStateChanged(auth, (currentUser) => {
				if (currentUser) {
					state.user = currentUser;
				} else {
					state.user = null;
				}
			});
		},
		logoutUser: async (state) => {
			await signOut(auth);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				console.log(payload, 'payload');
				state.loading = false;
				if (payload.error) {
					state.error = payload.error;
				} else {
					console.log(payload, 'payload');
					state.user = payload;
				}
			})
			.addCase(registerUser.rejected, (state, { payload }) => {
				state.loading = false;
			})
			.addCase(loginUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				state.loading = false;
				if (payload.name === 'FirebaseError') {
					state.error = payload.code;
					console.log(payload, 'payload');
				} else {
					// state.user = payload;
					console.log(payload, 'payload');
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
