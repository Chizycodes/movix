import React from 'react';
import Login from '../components/auth/Login';

const Auth = () => {
	return (
		<div className="w-full flex items-center justify-center min-h-screen text-[#747474]">
			<div className="max-w-[450px] w-full mx-5 border border-mBorder rounded-[10px] px-[1rem] py-[2rem]">
				<Login />
			</div>
		</div>
	);
};

export default Auth;
