import { Response, Request } from 'express';
import MatchService from '../services/matchesService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) {}

  public getAll = async (req: Request, res: Response) => {
    const allMatches = await this.matchService.getAll();

    return res.status(200).json(allMatches);
  }
}