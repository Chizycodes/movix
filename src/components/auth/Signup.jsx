import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from './AuthHeader';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/authSlice';

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, error, msg } = useSelector((state) => state.auth);
	const [show, setShow] = useState(false);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'all',
	});

	const onSubmit = (data) => {
		console.log(data);
		dispatch(registerUser(data));
		console.log(error, 'error');
		console.log(msg, 'msg');
	};
	return (
		<>
			<AuthHeader text="Please sign-in to your account and start your experience" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-[1rem]">
					<input
						type="text"
						placeholder="Full Name"
						className="v-input"
						{...register('name', {
							required: true,
						})}
					/>
					{errors.name && errors.name.type === 'required' && (
						<span role="alert" className="text-[#ff00009e] text-xs">
							Name required
						</span>
					)}
				</div>

				<div className="mb-[1rem]">
					<input
						type="email"
						placeholder="Email"
						className="v-input"
						{...register('email', {
							required: true,
						})}
					/>
					{errors.email && errors.email.type === 'required' && (
						<span role="alert" className="text-[#ff00009e] text-xs">
							Email required
						</span>
					)}
				</div>

				<div className="w-full mb-[2rem]">
					<div className="relative">
						<input
							type={show ? 'text' : 'password'}
							placeholder="Password"
							className="v-input"
							{...register('password', {
								required: true,
							})}
						/>
						<img
							src="/images/eye.svg"
							alt="visibility icon"
							className="absolute right-[12px] top-[16px]"
							onClick={() => setShow(!show)}
						/>
					</div>
					{errors.password && errors.password.type === 'required' && (
						<span role="alert" className="text-[#ff00009e] text-xs">
							Password required
						</span>
					)}
				</div>

				<button type="submit" className={`v-btn w-full ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
					{loading ? 'Loading...' : 'Register'}
				</button>
			</form>
			<p className="text-[#747474] mt-5 font-medium text-sm text-center">
				Already have an account?{' '}
				<Link to="/auth/login" className="text-mRed">
					Login
				</Link>
			</p>
		</>
	);
};

export default Signup;
