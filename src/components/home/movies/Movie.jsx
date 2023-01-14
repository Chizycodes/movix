import { useState } from 'react';

const Movie = () => {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		setIsFav(!isFav);
	};
	return (
		<div>
			<div className="w-[250px] relative">
				<div className="absolute w-full flex justify-between top-4 px-4">
					<div className="uppercase px-[8px] flex items-center justify-center rounded-[12px] bg-[#f3f4f67d] backdrop-blur-[1px] text-[#111827] font-bold text-xs">
						TV SERIES
					</div>
					<img
						src={`/images/fav-${isFav ? 'red' : 'gray'}.svg`}
						className="cursor-pointer"
						alt="fav"
						onClick={handleFavorite}
					/>
				</div>

				<img className="w-full h-[370px]" src="/images/movie1.svg" alt="movie" />
				<div className="bg-[#fff]">
					<p className="text-[#9CA3AF] mt-3">USA, 2018</p>
					<h2 className="text-[#111827] font-bold text-[18px]">Spider-Man : Into The Spider Verse</h2>
					<div className="my-3 text-xs flex justify-between gap-5 w-full">
						<span className="flex items-center gap-2">
							<img src="/images/imdb.svg" alt="imdb" />
							<p>86.0/100</p>
						</span>

						<span className="flex items-center gap-2">
							<img src="/images/tomato.svg" alt="tomato" />
							<p>96%</p>
						</span>
					</div>
					<p className="text-[#9CA3AF] text-xs font-bold">Animation, Action, Adventure</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;