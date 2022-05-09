import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import User from '../database/models/User';
import { readFile } from 'fs/promises';

interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
}

export default class LoginService {

  public async login(email: string, password: string) {
    const validUser = await User.findOne({ where: {email} }); // acha usuario com o email

    if (!validUser) {
      return false;
    };

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) {
      return false;
    };

    const user: IUser = { 
      id: validUser.id,
      username: validUser.username,
      role: validUser.role,
      email: validUser.email,
    };

    const secret = await readFile('jwt.evaluation.key', 'utf-8'); // pega chave do token

    const token = jwt.sign({ data: user.role }, secret, { expiresIn: '7d' }); // cria o token

    return { user, token};
  }
} 