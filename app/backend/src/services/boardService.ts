import Teams from "../database/models/Teams";
import Matches from "../database/models/Matches";
import Board from '../interfaces/Board';

// feito cm ajuda d leandro e paulo

export default class BoardService {
  private orderBoard = (results: Board[]) => {
    const orderByGoalsFavor = results.sort((a, b) => {
      return b.goalsFavor - a.goalsFavor; });

    const orderByBalance = orderByGoalsFavor.sort((a, b) => {
      return b.goalsBalance - a.goalsBalance; });

    const orderByVictories = orderByBalance.sort((a, b) => {
      return b.totalVictories - a.totalVictories; });

    const orderByPoints = orderByVictories.sort((a, b) => {
      return b.totalPoints - a.totalPoints; });

    return orderByPoints;
  }

  public async homePoints() { 
    const allTeams = await Teams.findAll();
    const matches = await Matches.findAll();
    const results: Board[] = []; // é do tipo array de boards-vazio
    
    allTeams.forEach(team => {
      
      const teamMatches = matches.filter((match) => {
        return match.homeTeam === team.id && match.inProgress === false;
      })
      .map((match) => { // gols para contar pontos
        return {
          goalsFavor: match.homeTeamGoals,
          goalsOwn: match.awayTeamGoals,
      }});
      
      const result = new Board({
        teamName: team.teamName,
        matches: teamMatches,
      });
      results.push(result); // add results mas sem ordernar
    });
    return this.orderBoard(results);
  }

  public async awayPoints() { 
    const teams = await Teams.findAll();
    const matches = await Matches.findAll();
    const results: Board[] = [];
    teams.forEach(team => {
      const teamMatches = matches.filter((match) => {
        return match.awayTeam === team.id && match.inProgress === false;
      }).map((match) => {
        return {
          goalsFavor: match.awayTeamGoals,
          goalsOwn: match.homeTeamGoals,
      }
      });
      const result = new Board({
        teamName: team.teamName,
        matches: teamMatches,
      });
      results.push(result);
    });
    return this.orderBoard(results);
  }

  public async getAll() { 
    const teams = await Teams.findAll();
    const matches = await Matches.findAll();
    const results: Board[] = [];
    teams.forEach(team => {
      const homeGames = matches.filter((match) => {
        return match.homeTeam === team.id && match.inProgress === false; 
      }).map((match) => { 
        return {
          goalsFavor: match.homeTeamGoals,
          goalsOwn: match.awayTeamGoals,
      }});
      const awayMatches = matches.filter((match) => {
        return match.awayTeam === team.id && match.inProgress === false; 
      }).map((match) => { 
        return {
          goalsFavor: match.awayTeamGoals,
          goalsOwn: match.homeTeamGoals,
      }});
      const teamMatches = [... homeGames, ... awayMatches];
      const result = new Board({
        teamName: team.teamName,
        matches: teamMatches,
      });
      results.push(result); 
    });
    return this.orderBoard(results);
  }
}