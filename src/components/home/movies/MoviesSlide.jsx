import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Casts from './Casts';
import Movie from './Movie';
import Video from './Video';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../redux/movies/moviesSlice';

const MoviesSlide = ({ type, title }) => {
	const { movies, loading } = useSelector((state) => state.movies);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-5 md:mb-[40px]">
				<h2 className="text-[#000000] text-[24px] md:text-[36px] font-bold">{title}</h2>
				<Link to="#" className="text-mRed text-sm md:text-[18px] flex items-center gap-2 md:gap-5">
					<span>See more</span>
					<img src="/images/red-right-arrow.svg" alt="arrow" />
				</Link>
			</div>

			{loading ? (
				<div>
					<h1>Loading...</h1>
				</div>
			) : (
				<div className="carousel carousel-center space-x-4">
					<>
						{type === 'movies' &&
							movies.length > 0 &&
							movies.map((movie) => {
								return (
									<div key={movie.id} className="carousel-item">
										<Movie movie={movie} />
									</div>
								);
							})}
					</>

					<>
						{type === 'videos' &&
							movies.length > 0 &&
							movies.map((movie) => {
								return (
									<div className="carousel-item">
										<Video key={movie.id} movie={movie} />
									</div>
								);
							})}
					</>

					{type === 'casts' && <Casts />}
				</div>
			)}
		</div>
	);
};

export default MoviesSlide;
