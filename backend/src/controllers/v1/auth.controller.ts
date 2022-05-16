import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AuthService from '@src/services/auth.service';

export class AuthController {
	public static async signup(req: Request, res: Response) {
		const user = req.body;
		console.log(req.session);

		try {
			const result = await AuthService.signup(user);
			req.session.user = { username: result.rows[0].username, id: result.rows[0].id };

			return res.status(StatusCodes.CREATED).send(result);
		} catch (error) {
			return res.status(StatusCodes.CONFLICT).send(error);
		}
	}
	public static async login(req: Request, res: Response) {
		const credentials = req.body;
		console.log(req.session);

		try {
			const result = await AuthService.login(credentials);
			req.session.user = { username: result.rows[0].username, id: result.rows[0].id };

			return res.status(StatusCodes.OK).send(result);
		} catch (error) {
			return res.status(StatusCodes.UNAUTHORIZED).send(error);
		}
	}
}
