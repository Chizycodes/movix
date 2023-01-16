import React from 'react';

const Video = ({ movie }) => {
	return (
		<div>
			<div className="w-[400px] relative">
				<img src="/images/play-icon.svg" alt="play" className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer' />
				<img
					className="w-full h-[253px] object-fit"
					src={process.env.REACT_APP_IMAGE_URL + movie?.poster_path}
					alt="movie"
				/>
				<div className="bg-[#fff] py-3">
					<h2 className="text-[#111827] font-bold text-base md:text-[18px]">{movie?.title} Trailer</h2>
				</div>
			</div>
		</div>
	);
};

export default Video;
