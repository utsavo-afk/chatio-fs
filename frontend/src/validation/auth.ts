import * as Yup from 'yup';

export const signupSchema = Yup.object({
	username: Yup.string()
		.required('Username required.')
		.min(6, 'Username too short.')
		.max(28, 'Username too long.'),
	email: Yup.string().required('Email required').email('Email not valid'),
	password: Yup.string()
		.required('Password required.')
		.min(6, 'Password too short.')
		.max(28, 'Password too long.'),
	password2: Yup.string().when('password', {
		is: (val: string) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref('password')], "Passwords don't match"),
	}),
});

export const loginSchema = Yup.object({
	username: Yup.string()
		.required('Username required.')
		.min(6, 'Username too short.')
		.max(28, 'Username too long.'),
	password: Yup.string()
		.required('Password required.')
		.min(6, 'Password too short.')
		.max(28, 'Password too long.'),
});
