import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";

export default function errorHandler(
  error: ValidationError,
  _req: Request,
  res: Response,
  _next: NextFunction,
){
  if (error.details) {
    const [err] = error.details;
    const { type, message } = err;

    if (type === 'string.min' || type === 'string.email') {
      return res.status(401).json({ message });
    }
    return res.status(400).json({ message }); // erro para padrao do joi
  }
  return res.status(500).json(error);
} 