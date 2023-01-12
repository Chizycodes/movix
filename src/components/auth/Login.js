import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/dashboard');
		console.log(values);
	};
	return (
		<div className="w-full flex items-center justify-center min-h-screen text-[#747474]">
			<div className="max-w-[450px] w-full mx-5 border border-borderColor rounded-[10px] px-[1rem] py-[2rem]">
				<div className="text-center">
					<img src="/images/logo.svg" alt="Logo" className="mb-[24px] mx-auto" />
					<h1 className="text-[18px] text-[#000000] font-bold">Hi, Welcome</h1>
					<p className="mb-[20px] font-medium text-sm">Please sign-up to start your experience</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-[1rem]">
						<input
							type="email"
							value={values.email}
							onChange={(e) => setValues({ ...values, email: e.target.value })}
							required
							placeholder="Email"
							className="m-input"
						/>
					</div>

					<div className="relative w-full mb-[2rem]">
						<input
							type={show ? 'text' : 'password'}
							value={values.password}
							required
							onChange={(e) => setValues({ ...values, password: e.target.value })}
							placeholder="Password"
							className="m-input"
						/>
						<img
							src="/images/eye.svg"
							alt="visibility icon"
							className="absolute right-[12px] top-[16px]"
							onClick={() => setShow(!show)}
						/>
					</div>

					<button type="submit" className="m-btn">
						Login
					</button>
				</form>
				<p className="text-[#747474] mt-5 font-medium text-sm text-center">
					Don't have an account?{' '}
					<Link to="/auth/register" className="text-primary">
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
