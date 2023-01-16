import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
const key = process.env.REACT_APP_TMDB_KEY;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
	return await axios
		.get(`${BASE_URL}/discover/movie?api_key=${key}`)
		.then((res) => {
			return res.data.results;
		})
		.catch((err) => console.log(err));
});

export const getMovieCasts = createAsyncThunk('movies/casts', async () => {
	return await axios
		.get(`${BASE_URL}/movie/76600/credits?api_key=${key}`)
		.then((res) => {
			return res.data.cast;
		})
		.catch((err) => console.log(err));
});

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		loading: false,
		movies: [],
		casts: [],
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.loading = false;
				state.movies = action.payload;
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.loading = false;
			})
			.addCase(getMovieCasts.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getMovieCasts.fulfilled, (state, action) => {
				state.loading = false;
				state.casts = action.payload;
			})
			.addCase(getMovieCasts.rejected, (state, action) => {
				state.loading = false;
			});
	},
});

export default moviesSlice.reducer;
