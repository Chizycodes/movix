import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const initialState = {
	loading: false,
	user: null,
	error: null,
	msg: null,
};

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
	return await createUserWithEmailAndPassword(auth, data.email, data.password, data.displayName)
		.then((res) => {
			toast.success('Registration Successful');
			updateProfile(auth.currentUser, {
				displayName: data.displayName,
			}).then((res) => {
				console.log('Profile Updated');
				return res;
			});
		})
		.catch((err) => {
			const error = { ...err };
			toast.error(error.code);
			return error;
		});
});

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
	return await signInWithEmailAndPassword(auth, data.email, data.password)
		.then((res) => {
			toast.success('Login Successful');
			const user = {
				email: res.user.email,
				name: res.user.displayName,
			};
			return user;
		})
		.catch((err) => {
			const error = { ...err };
			toast.error(error.code);
			return error;
		});
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload === null ? null : { ...payload };
		},
		logoutUser: async (state) => {
			await signOut(auth);
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				state.loading = false;
				if (payload.name && payload.name === 'FirebaseError') {
					state.error = payload.code;
				} else {
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
				} else {
					// state.user = payload;
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export const { logoutUser, setUser } = authSlice.actions;
export default authSlice.reducer;
