import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="max-w-[1280px] mx-auto px-5 flex flex-col items-center">
			<div className="flex items-center gap-5 md:gap-10 mb-[35px]">
				<a href="https://facebook.com" target="_blank" rel="noreferrer">
					<img src="/images/fb.svg" alt="fb" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noreferrer">
					<img src="/images/instagram.svg" alt="instagram" />
				</a>
				<a href="https://twitter.com/chizycodes" target="_blank" rel="noreferrer">
					<img src="/images/twitter.svg" alt="twitter" />
				</a>
				<a href="https://youtube.com" target="_blank" rel="noreferrer">
					<img src="/images/youtube.svg" alt="youtube" />
				</a>
			</div>

			<div className="flex items-center gap-5 md:gap-10 mb-[35px] text-[#111827] font-bold text-xs md:text-[18px]">
				<Link to="#">Conditions of Use</Link>
				<Link to="#">Privacy & Policy</Link>
				<Link to="#">Press Room</Link>
			</div>

			<p className="text-[#6B7280] text-xs md:text-[18px] font-bold pb-10">&copy; 2021 Movix</p>
		</footer>
	);
};

export default Footer;
