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
}
