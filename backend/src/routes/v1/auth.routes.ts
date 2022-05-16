import { Router } from 'express';
import { AuthController } from '@src/controllers/v1/auth.controller';
import validate from '@src/middleware/validateSchema';
import { loginSchema, signupSchema } from '@src/validation';

const router = Router();

router.route('/auth/login').post(validate(loginSchema), AuthController.login);

router.route('/auth/signup').post(validate(signupSchema), AuthController.signup);

export default router;
