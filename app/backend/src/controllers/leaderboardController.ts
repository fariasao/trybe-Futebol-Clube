import { NextFunction, Request, Response } from "express";
import BoardService  from "../services/boardService";

export default class BoardController {
  constructor(
    private boardService = new BoardService(),
  ) {}
  public homePoints = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
        const board = await this.boardService.homePoints();
        res.status(200).json(board);
    };

  public awayPoints = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
        const board = await this.boardService.awayPoints();
        res.status(200).json(board);
    };

    public allGames = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
        const board = await this.boardService.getAll();
        res.status(200).json(board);
      }
}; 
