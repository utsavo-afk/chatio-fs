import { hash, verify } from 'argon2';
import { pg_pool } from '@src/helpers';

export type UserObj = {
	username: string;
	email: string;
	password: string;
};

class AuthService {
	public static async signup(user: UserObj) {
		const isExist = await pg_pool.query('SELECT username FROM users WHERE username=$1', [user.username]);
		if (!isExist.rowCount) {
			// register
			const _password = await hash(user.password);
			user.password = _password;
			const { rows, rowCount } = await pg_pool.query(
				'INSERT INTO users(username, email, password) values($1, $2, $3) RETURNING id, username',
				[user.username, user.email, user.password]
			);
			return { rows, rowCount, status: 'ok', message: 'Insert success', loggedIn: true };
		}
		throw { status: 'failed', message: 'Duplicate username', loggedIn: false };
	}

	public static async login(user: Omit<UserObj, 'email'>) {
		const userData = await pg_pool.query('SELECT id, username, password FROM users WHERE username=$1', [user.username]);
		if (userData.rowCount) {
			const isVerified = await verify(userData.rows[0].password, user.password);
			delete userData.rows[0].password;
			if (isVerified) {
				return { rows: userData.rows, status: 'ok', message: 'Login success', loggedIn: true };
			}
		}
		throw { status: 'failed', message: 'Login failed', loggedIn: false };
	}
}

export default AuthService;
