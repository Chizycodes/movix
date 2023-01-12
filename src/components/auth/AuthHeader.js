import React from 'react';

const AuthHeader = ({ text }) => {
	return (
		<div className="text-center">
			<img src="/images/logo.svg" alt="Logo" className="mb-[24px] mx-auto" />
			<h1 className="text-[18px] text-[#000000] font-bold">Hi, Welcome</h1>
			<p className="mb-[20px] font-medium text-sm">{text}</p>
		</div>
	);
};

export default AuthHeader;
