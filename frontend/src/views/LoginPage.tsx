import { Heading, VStack } from '@chakra-ui/react';
import { LoginForm } from '@src/components';
import React from 'react';

const LoginPage = () => {
	return (
		<VStack
			as="form"
			w={{ base: '90%', md: '500px' }}
			m="auto"
			justify="center"
			h="100vh"
			spacing="1rem"
		>
			<Heading>Log In</Heading>
			<LoginForm />
		</VStack>
	);
};

export default LoginPage;
