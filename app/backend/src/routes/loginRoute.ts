import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', loginController.create);

export default loginRouter;