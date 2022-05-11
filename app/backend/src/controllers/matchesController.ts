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

  public createMatch = async (req: Request, res: Response) => {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = req.body;
    const createdMatch = await this.matchService.createMatch(homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress);

    if (homeTeam === awayTeam) {
      return res.status(401).json({ message: "It is not possible to create a match with two equal teams" })
    }
    if (!createdMatch) {
      return res.status(404).json({ message: "There is no team with such id!" })
    }

    return res.status(201).json(createdMatch);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    await this.matchService.finishMatch((id));
    
    return res.status(200).json({ message: 'terminou aqui' });
  }

  public editMatch = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    
    await this.matchService.updated((id), homeTeamGoals, awayTeamGoals);
    
    return res.status(200).json({ message: 'atualizou aqui' });
  }
}