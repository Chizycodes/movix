import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
	const { user } = useSelector((state) => state.auth);
	const handleSearch = () => {
		console.log('clicked');
	};
	return (
		<nav className="z-10 w-full py-4">
			<div className="flex items-center justify-between gap-5 max-w-[80rem] mx-auto">
				<img src="/images/logo-main.svg" alt="logo" />

				<div className="relative max-w-[400px] w-full">
					<input
						type="search"
						placeholder="What do you want to watch?"
						className="v-input border-[#ffffff] h-[40px] text-[#fff] placeholder:text-[#fff] bg-transparent w-full"
					/>
					<img
						src="/images/search.svg"
						alt="search"
						className="absolute right-[12px] top-[16px] cursor-pointer"
						onClick={handleSearch}
					/>
				</div>
				<div className="text-[#fff] flex items-center gap-5">
					<p>Hi, {user?.name}</p>
					<img src="/images/menu.svg" className='cursor-pointer' alt="menu" />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
