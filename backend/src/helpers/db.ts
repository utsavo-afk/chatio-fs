import { Pool } from 'pg';
import config from '@src/config';

const pool = new Pool({
	database: config.DB_NAME,
	host: config.DB_HOST,
	password: config.DB_PASSWORD,
	user: config.DB_USER,
	port: config.DB_PORT,
});

export default pool;
