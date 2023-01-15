import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';
import authReducer from './auth/authSlice';

export default configureStore({
	reducer: {
        movies: moviesReducer,
        auth: authReducer,
    },
});
