import { Router } from 'express';
import AuthController from "../controllers/auth.controller";
const authRouter = Router();
authRouter.post('/login',AuthController.Login);
authRouter.post('/register',AuthController.Register);
export default authRouter;