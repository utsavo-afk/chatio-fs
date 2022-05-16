import { config } from 'dotenv-safe';
config();

export default {
	PORT: process.env.PORT || 1234,
	DB_NAME: process.env.DB_NAME || 'db_name',
	DB_HOST: process.env.DB_HOST || '127.0.0.1',
	DB_PASSWORD: process.env.DB_PASSWORD || 'db_password',
	DB_USER: process.env.DB_USER || 'db_user',
	DB_PORT: Number(process.env.DB_PORT) || 5432,
	COOKIE_SECRET: process.env.COOKIE_SECRET || 'cookie_secret',
};
