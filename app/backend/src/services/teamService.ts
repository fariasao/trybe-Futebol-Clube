import Teams from '../database/models/Teams';

export default class teamService {
  
  public async getAll() {
    const allTeams = await Teams.findAll();

    if (!allTeams) return false;

    return allTeams;
  }
}