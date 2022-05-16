import express, { json, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import StatusCode from 'http-status-codes';
import validate from './middleware/validateSchema';
import { loginSchema, signupSchema } from './validation';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(json());

app.get('/healthcheck', (req: Request, res: Response) => {
	return res.status(StatusCode.OK).send('Running...');
});

app.post('/api/v1/auth/signup', validate(signupSchema), (req: Request, res: Response) => {
	console.log(req.body);
	return res.status(StatusCode.OK).send(req.body);
});

app.post('/api/v1/auth/login', validate(loginSchema), (req: Request, res: Response) => {
	console.log(req.body);
	return res.status(StatusCode.OK).send(req.body);
});

export { app };
