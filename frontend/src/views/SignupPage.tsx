import { SignupForm } from '@src/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
	const navigate = useNavigate();
	return <SignupForm navigate={navigate} />;
};

export default SignupPage;
