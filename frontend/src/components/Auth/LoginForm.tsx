import {
	Button,
	ButtonGroup,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React from 'react';

const LoginForm = () => {
	return (
		<>
			<FormControl>
				<FormLabel fontSize={'lg'}>Username</FormLabel>
				<Input
					name="username"
					type={'text'}
					placeholder="Enter Username"
					autoComplete="off"
					size={'lg'}
				/>
				<FormErrorMessage>Invalid Username</FormErrorMessage>
			</FormControl>
			<FormControl>
				<FormLabel fontSize={'lg'}>Password</FormLabel>
				<Input
					name="password"
					type={'password'}
					placeholder="Enter Password"
					autoComplete="off"
					size={'lg'}
				/>
				<FormErrorMessage>Invalid Password</FormErrorMessage>
			</FormControl>
			<ButtonGroup pt={5}>
				<Button colorScheme={'teal'} type={'submit'}>
					Log In
				</Button>
				<Button>Create Account</Button>
			</ButtonGroup>
		</>
	);
};

export default LoginForm;
