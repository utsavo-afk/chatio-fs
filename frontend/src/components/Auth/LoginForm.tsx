import { Button, ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import * as Yup from 'yup';

import FormTextField from '../FormTextField';

export type LoginFormProps = {
	navigate: NavigateFunction;
};

const LoginForm = ({ navigate }: LoginFormProps) => {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={Yup.object({
				username: Yup.string()
					.required('Username required.')
					.min(6, 'Username too short.')
					.max(28, 'Username too long.'),
				password: Yup.string()
					.required('Password required.')
					.min(6, 'Password too short.')
					.max(28, 'Password too long.'),
			})}
			onSubmit={(values, actions) => {
				alert(JSON.stringify(values, null, 2));
				actions.resetForm();
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
