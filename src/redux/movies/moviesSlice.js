import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
const key = process.env.REACT_APP_TMDB_KEY;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
	return await axios
		.get(`${BASE_URL}/discover/movie?api_key=${key}`)
		.then((res) => {
			console.log(res.data, 'movies');
			return res.data.results;
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
