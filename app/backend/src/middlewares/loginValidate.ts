import { NextFunction, Request, Response } from "express";
import loginSchema from "../schemas/loginSchema";

export default async (req: Request, _res: Response, next: NextFunction) => {
  try { 
    await loginSchema.validateAsync(req.body);
    return next();
  } catch (e) {
    return next(e);
  }
} 