import { Router } from 'express';
import validadeJWT from '../auth/validateJWT';
import LoginController from '../controllers/loginController';
import loginValidate from '../middlewares/loginValidate';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post('/', loginValidate, loginController.create);

loginRouter.get('/validate', validadeJWT, loginController.validate);

export default loginRouter;