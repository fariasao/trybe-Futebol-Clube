import { NextFunction, Response } from "express";
import { readFile } from "fs/promises";
import { verify } from "jsonwebtoken";
import IRequest from "../interfaces/IRequest";

export default async(req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found'});
    }

    const secret = await readFile('jwt.evaluation.key', 'utf-8');
    
    const decoded = verify(token, secret);
    
    req.role = decoded;
    return next();
  } catch (e) {
    return next(e);
  }
}