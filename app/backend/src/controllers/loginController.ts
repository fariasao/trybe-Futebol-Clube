import { Response, Request } from 'express';
import IRequest from '../interfaces/IRequest';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) {}

  public create = async (req: Request, res: Response) => {
      const { email, password } = req.body;
  
      const createdLogin = await this.loginService.login(email, password);
      if (!createdLogin) return res.status(400).json({ error: 'Usuário ou senha inválidos' });
  
      return res.status(200).json(createdLogin);
  };

  public validate = async (req: IRequest, res: Response) => {
    if (typeof req.role !== 'string' && req.role?.data) {
      return res.status(200).json(req.role.data);
    }
    return res.status(500).json({ message: 'undefined error'})
  }
} 