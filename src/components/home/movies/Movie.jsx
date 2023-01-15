import { useState } from 'react';

const Movie = ({ movie }) => {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		setIsFav(!isFav);
	};
	return (
		<div>
			<div className="w-[250px] relative">
				<div className="absolute w-full flex justify-between top-4 px-4">
					{/* <div className="uppercase px-[8px] flex items-center justify-center rounded-[12px] bg-[#f3f4f67d] backdrop-blur-[1px] text-[#111827] font-bold text-xs">
						TV SERIES
					</div> */}
					<div></div>
					<img
						src={`/images/fav-${isFav ? 'red' : 'gray'}.svg`}
						className="cursor-pointer"
						alt="fav"
						onClick={handleFavorite}
					/>
				</div>

				<img className="w-full h-[370px]" src={process.env.REACT_APP_IMAGE_URL + movie?.poster_path} alt="movie" />
				<div className="bg-[#fff]">
					<p className="text-[#9CA3AF] text-sm md:text-base mt-3">{movie?.release_date}</p>
					<h2 className="text-[#111827] font-bold text-base md:text-[18px]">{movie?.title}</h2>
					<div className="my-3 text-xs flex justify-between gap-5 w-full">
						<span className="flex items-center gap-2">
							<img src="/images/imdb.svg" alt="imdb" />
							<p>{movie?.vote_average}/10</p>
						</span>

						<span className="flex items-center gap-2">
							<img src="/images/tomato.svg" alt="tomato" />
							<p>96%</p>
						</span>
					</div>
					{/* <p className="text-[#9CA3AF] text-xs font-bold">Animation, Action, Adventure</p> */}
				</div>
			</div>
		</div>
	);
};

export default Movie;
