import Team from "../database/models/Teams";
import Match from "../database/models/Matches";

export default class MatchService {
  
    public async getAll() {
      const allMatches = await Match.findAll({
        include: [{ model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } }],
    });
    if (!allMatches) return false;

    return allMatches;
  }

  public async createMatch(homeTeam: number, homeTeamGoals: number, awayTeam: number, awayTeamGoals: number, inProgress: boolean) {

    const homeExist = await Team.findByPk(homeTeam);
    const awayExist = await Team.findByPk(awayTeam);

    if (!homeExist || !awayExist) return null;

    const create = await Match.create({
      homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress });
    
      return create;
  }

  public async finishMatch(id: string) {
    await Match.update({ inProgress: false }, { where: { id } });
  }

  public async updated(id: string, homeTeamGoals: number, awayTeamGoals: number) {
    await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
