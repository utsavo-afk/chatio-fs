import { LoginForm } from '@src/components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const navigate = useNavigate();
	return <LoginForm navigate={navigate} />;
};

export default LoginPage;
