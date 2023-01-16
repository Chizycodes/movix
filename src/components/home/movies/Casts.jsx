import React from 'react';

const Casts = ({ cast }) => {
	return (
		<div>
			<div className="w-[250px] relative">
				<img className="w-full h-[370px]" src={process.env.REACT_APP_IMAGE_URL + cast?.profile_path} alt="cast" />
				<div className="bg-[#fff] py-3">
					<h2 className="text-[#111827] font-bold text-base md:text-[18px]">{cast?.original_name}</h2>
				</div>
			</div>
		</div>
	);
};

export default Casts;
