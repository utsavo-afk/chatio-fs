import express, { json, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import StatusCode from 'http-status-codes';
import { AuthRouter } from './routes/v1';
import config from './config';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(json());
app.use(
	session({
		secret: config.COOKIE_SECRET,
		name: 'sid',
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: process.env.NODE_ENV === 'production',
			httpOnly: true,
			sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		},
	})
);

app.get('/healthcheck', (req: Request, res: Response) => {
	return res.status(StatusCode.OK).send('Running...');
});

app.use('/api/v1', AuthRouter);

export { app };
