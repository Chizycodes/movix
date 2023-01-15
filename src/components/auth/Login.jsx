import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from './AuthHeader';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authSlice';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, user } = useSelector((state) => state.auth);
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
		dispatch(loginUser(data));
	};

	useEffect(() => {
		if (user) {
			reset();
			navigate('/movies');
		}
	}, [user]);
	return (
		<>
			<AuthHeader text="Please sign-up to start your experience" />
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<button type="submit" className="v-btn w-full">
					{loading ? 'Loading...' : 'Login'}
				</button>
			</form>
			<p className="text-[#747474] mt-5 font-medium text-sm text-center">
				Don't have an account?{' '}
				<Link to="/auth/register" className="text-mRed">
					Register
				</Link>
			</p>
		</>
	);
};

export default Login;
