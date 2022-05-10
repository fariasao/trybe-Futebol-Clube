import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidate';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', loginValidate, loginController.create);

export default loginRouter;