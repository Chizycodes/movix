import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="max-w-[1280px] mx-5 flex flex-col items-center">
			<div className="flex items-center gap-5 md:gap-10 mb-[35px]">
				<img src="/images/fb.svg" alt="fb" />
				<img src="/images/instagram.svg" alt="instagram" />
				<img src="/images/twitter.svg" alt="twitter" />
				<img src="/images/youtube.svg" alt="youtube" />
			</div>

			<div className="flex items-center gap-5 md:gap-10 mb-[35px] text-[#111827] font-bold text-[18px]">
				<Link to="#">Conditions of Use</Link>
				<Link to="#">Privacy & Policy</Link>
				<Link to="#">Press Room</Link>
			</div>

			<p className="text-[#6B7280] text-[18px] font-bold pb-10">&copy; 2021 Movix</p>
		</footer>
	);
};

export default Footer;
