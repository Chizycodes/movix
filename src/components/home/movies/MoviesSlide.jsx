import { Link } from 'react-router-dom';
import Casts from './Casts';
import Movie from './Movie';
import Video from './Video';

const MoviesSlide = ({ type, title }) => {
	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-[40px]">
				<h2 className="text-[#000000] text-[36px] font-bold">{title}</h2>
				<Link to="#" className="text-mRed text-[18px] flex items-center gap-5">
					<span>See more</span>
					<img src="/images/red-right-arrow.svg" alt="arrow" />
				</Link>
			</div>

			<div>
				{type === 'movies' && <Movie />}
				{type === 'videos' && <Video />}
				{type === 'casts' && <Casts />}
			</div>
		</div>
	);
};

export default MoviesSlide;
