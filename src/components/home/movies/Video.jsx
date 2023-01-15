import React from 'react';

const Video = ({ movie }) => {
	return (
		<div>
			<div className="w-[449px] relative">
				<img
					className="w-full h-[253px] object-fit rounded-[10px]"
					src={process.env.REACT_APP_IMAGE_URL + movie?.poster_path}
					alt="movie"
				/>
				<div className="bg-[#fff] py-3">
					<h2 className="text-[#111827] font-bold text-[18px]">{movie?.title} Trailer</h2>
				</div>
			</div>
		</div>
	);
};

export default Video;
