import { useState } from 'react';
import { useSelector } from 'react-redux';
import DropDown from './DropDown';

const Nav = () => {
	const { user } = useSelector((state) => state.auth);
	const [dropdown, setDropdown] = useState(false);
	const handleSearch = () => {
		console.log('clicked');
	};
	return (
		<nav className="z-10 w-full pt-4">
			<div className="flex items-center justify-between gap-5 max-w-[80rem] mx-auto">
				<img src="/images/logo-main.svg" alt="logo" className="hidden lg:block" />
				<img src="/images/logo-mobile.svg" alt="logo" className="lg:hidden" />

				<div className="relative max-w-[400px] w-full hidden md:block">
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
				<div className="text-[#fff] flex items-center gap-2 lg:gap-5 relative">
					<p>Hi, {user?.name}</p>
					<img src="/images/menu.svg" className="cursor-pointer" alt="menu" onClick={() => setDropdown(!dropdown)} />
					{dropdown && <DropDown />}
				</div>
			</div>
			<div className="relative w-full md:hidden block mt-5">
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
		</nav>
	);
};

export default Nav;
