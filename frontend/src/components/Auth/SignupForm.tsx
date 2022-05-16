import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { AuthService, SignupUser } from '@src/api/auth';
import { signupSchema } from '@src/validation/auth';
import { Form, Formik } from 'formik';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';

import FormTextField from '../FormTextField';

export type SignupFormProps = {
	navigate: NavigateFunction;
};

const SignupForm = ({ navigate }: SignupFormProps) => {
	return (
		<Formik
			initialValues={{ username: '', password: '', email: '', password2: '' }}
			validationSchema={signupSchema}
			onSubmit={async (values, actions) => {
				alert(JSON.stringify(values, null, 2));
				actions.resetForm();
				const response = await AuthService.signup({ ...values } as SignupUser);
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
					spacing="1.2rem"
					onSubmit={() => formik.handleSubmit()}
				>
					<Heading>Sign Up</Heading>
					<FormTextField
						name="username"
						label="Username"
						placeholder="Enter username"
						autoComplete="off"
					/>

					<FormTextField
						name="email"
						label="Email"
						placeholder="jane.doe@example.com"
						autoComplete="on"
					/>

					<FormTextField
						name="password"
						label="Password"
						placeholder="Enter password"
						autoComplete="off"
						type={'password'}
					/>

					<FormTextField
						name="password2"
						label="Confirm Password"
						placeholder="Re-enter password"
						autoComplete="off"
						type={'password'}
					/>

					<ButtonGroup pt={5}>
						<Button colorScheme={'teal'} type={'submit'}>
							Create Account
						</Button>
						<Button leftIcon={<ArrowBackIcon />} onClick={() => navigate('/login')}>
							Back
						</Button>
					</ButtonGroup>
				</VStack>
			)}
		</Formik>
	);
};

export default SignupForm;
