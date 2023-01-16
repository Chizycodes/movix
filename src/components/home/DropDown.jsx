import React from 'react';
import { logoutUser } from '../../redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const DropDown = () => {
	const dispatch = useDispatch();
	return (
		<div className="z-10 absolute rounded right-0 shadow top-12 py-2 px-3 w-[150px] bg-[#ffffff] ">
			<ul className="">
				<li className="flex w-full justify-between text-[#111827] cursor-pointer items-center py-2">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-user"
							width={18}
							height={18}
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<circle cx={12} cy={7} r={4} />
							<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
						</svg>
						<span className="text-sm ml-2">My Profile</span>
					</div>
				</li>
				<li
					className="flex w-full justify-between text-[#111827] cursor-pointer items-center py-2"
					onClick={() => dispatch(logoutUser())}
				>
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-logout"
							width={20}
							height={20}
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
							<path d="M7 12h14l-3 -3m0 6l3 -3" />
						</svg>
						<span className="text-sm ml-2">Sign out</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default DropDown;
