import React from 'react';
import Hero from '../components/home/Hero';
import MoviesSlide from '../components/home/movies/MoviesSlide';

const HomePage = () => {
	return (
		<div className="font-DMSans bg-[#fff]">
			<Hero />
			<section className="max-w-[1280px] mx-auto px-5 py-16">
				<div className="mb-8  md:mb-20">
					<MoviesSlide type="movies" title="Featured Movie" />
				</div>

				<div className="mb-8  md:mb-20">
					<MoviesSlide type="movies" title="New Arrival" />
				</div>

				<div className="mb-8  md:mb-20">
					<MoviesSlide type="videos" title="Exclusive Videos" />
				</div>

				<div className="mb-8  md:mb-20">
					<MoviesSlide type="casts" title="Featured Casts" />
				</div>
			</section>
		</div>
	);
};

export default HomePage;
