import { Request } from "express";
import * as Jwt from "jsonwebtoken";

// interface para puxar a info q o req pede do "role" do user

interface IJWTPayload extends Jwt.JwtPayload{
  data?: string;
}

export default interface IRequest extends Request{
  role?: string | IJWTPayload
} 