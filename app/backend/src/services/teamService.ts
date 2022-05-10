import Teams from '../database/models/Teams';

export default class teamService {
  
  public async getAll() {
    const allTeams = await Teams.findAll();

    if (!allTeams) return false;

    return allTeams;
  }

  public async getById(id: number) {
    const teamId = await Teams.findByPk(id);

    if (!teamId) return false;

    return teamId;
  }
}