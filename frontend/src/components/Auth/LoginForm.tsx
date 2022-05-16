import { Button, ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { AuthService, LoginUser } from '@src/api/auth';
import { loginSchema } from '@src/validation/auth';
import { Form, Formik } from 'formik';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';

import FormTextField from '../FormTextField';

export type LoginFormProps = {
	navigate: NavigateFunction;
};

const LoginForm = ({ navigate }: LoginFormProps) => {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={loginSchema}
			onSubmit={async (values, actions) => {
				actions.resetForm();
				const response = await AuthService.login({ ...values } as LoginUser);
				console.log(response);
			}}
		>
			{(formik) => (
				<VStack
					as={Form}
					w={{ base: '90%', md: '500px' }}
					m="auto"
					justify="center"
					h="100vh"
					spacing="1rem"
					onSubmit={() => formik.handleSubmit()}
				>
					<Heading>Log In</Heading>
					<FormTextField
						name="username"
						label="Username"
						placeholder="Enter username"
						autoComplete="off"
					/>

					<FormTextField
						name="password"
						label="Password"
						placeholder="Enter username"
						autoComplete="off"
						type={'password'}
					/>
					<ButtonGroup pt={5}>
						<Button colorScheme={'teal'} type={'submit'}>
							Log In
						</Button>
						<Button onClick={() => navigate('/signup')}>Create Account</Button>
					</ButtonGroup>
				</VStack>
			)}
		</Formik>
	);
};

export default LoginForm;
