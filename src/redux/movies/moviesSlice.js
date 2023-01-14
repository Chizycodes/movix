import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', () => {
	return axios
		.get(`https://api.themoviedb.org/3/movie/550?api_key=75d298f1336f7963198114158f166c8c`)
		.then((res) => {
			console.log(res.data, 'movies');
		})
		.catch((err) => console.log(err));
});

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		loading: false,
		movies: [],
	},
	extraReducers: {
		[fetchMovies.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchMovies.fulfilled]: (state, action) => {
			state.loading = false;
			state.movies = action.payload;
		},
		[fetchMovies.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});

export default moviesSlice.reducer;
