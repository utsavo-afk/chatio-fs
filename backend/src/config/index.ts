import { config } from 'dotenv-safe';
config();

export default {
	PORT: process.env.PORT || 1234,
};
