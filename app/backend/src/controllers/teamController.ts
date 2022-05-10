import { Request, Response } from 'express';
import TeamsService from '../services/teamService';

export default class TeamsController {
  constructor(
    private teamsService = new TeamsService(),
    ) {}

  public getAll = async (req: Request, res: Response) => {
    const allTeams = await this.teamsService.getAll();

    return res.status(200).json(allTeams);
  };
}