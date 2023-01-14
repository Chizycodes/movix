import React from 'react';
import Nav from './Nav';

const Hero = () => {
	return (
		<div className="">
			<div className={`hero min-h-[600px] md:pb-10 px-5 bg-[url('../public/images/header.svg')] flex flex-col`}>
				<Nav />
				<div className="hero-content w-full justify-start gap-10 h-full my-auto">
					<div className="max-w-[404px] text-[#ffffff]">
						<h1 className="text-[35px] leading-[56px] lg:text-[48px] font-bold mb-[1rem]">John Wick 3 : Parabellum</h1>
						<div className="mb-[1.5rem] text-xs flex gap-5">
							<span className="flex items-center gap-2">
								<img src="/images/imdb.svg" alt="imdb" />
								<p>86.0/100</p>
							</span>

							<span className="flex items-center gap-2">
								<img src="/images/tomato.svg" alt="tomato" />
								<p>96%</p>
							</span>
						</div>
						<p className="text-sm font-medium mb-[1.5rem]">
							John Wick is on the run after killing a member of the international assassins' guild, and with a $14
							million price tag on his head, he is the target of hit men and women everywhere.
						</p>

						<div className="w-full flex">
							<button className="gap-2 v-btn bg-[#BE123C]">
								<img src="/images/play.svg" alt="" /> Watch trailer
							</button>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
