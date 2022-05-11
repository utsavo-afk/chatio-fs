import { Heading, VStack } from '@chakra-ui/react';
import { SignupForm } from '@src/components';
import React from 'react';

const SignupPage = () => {
	return (
		<VStack
			as="form"
			w={{ base: '90%', md: '500px' }}
			m="auto"
			justify="center"
			h="100vh"
			spacing="1rem"
		>
			<Heading>Create Account</Heading>
			<SignupForm />
		</VStack>
	);
};

export default SignupPage;
