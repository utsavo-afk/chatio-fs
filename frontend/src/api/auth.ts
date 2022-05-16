import axios, { AxiosError } from 'axios';

export type LoginUser = {
	username: string;
	password: string;
	email: string;
};

export type SignupUser = {};

export class AuthService {
	private static uri = 'http://localhost:1234/api/v1/auth';

	static async signup(payload: SignupUser) {
		try {
			const { data, status, statusText } = await axios.post(
				`${this.uri}/signup`,
				payload,
				{ withCredentials: true },
			);
			return { data, status, statusText };
		} catch (error) {
			if (error instanceof AxiosError) {
				return {
					error_response: error.response,
					error_data: error.response?.data,
					error_status: error.response?.status,
				};
			}
			return error;
		}
	}

	static async login(payload: LoginUser) {
		try {
			const { data, status, statusText } = await axios.post(
				`${this.uri}/login`,
				payload,
				{ withCredentials: true },
			);
			return { data, status, statusText };
		} catch (error) {
			if (error instanceof AxiosError) {
				return {
					error_response: error.response,
					error_data: error.response?.data,
					error_status: error.response?.status,
				};
			}
			return error;
		}
	}
}
