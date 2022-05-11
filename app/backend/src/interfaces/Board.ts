// feito cm bastante ajuda de leandro e zambs

interface IMatch{ 
  goalsFavor: number;
  goalsOwn: number;
}

interface IBoard { 
  teamName: string;
  matches: IMatch[];
}

export default class Board {

  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: number;

  constructor( { teamName , matches }: IBoard) {
    this.name = teamName;
    this.totalPoints = this.calculateTotalPoints(matches);
    this.totalGames = matches.length;
    this.totalVictories = this.calculateTotalVictories(matches);
    this.totalDraws = this.calculateTotalDraws(matches);
    this.totalLosses = this.calculateTotalLosses(matches);
    this.goalsFavor = this.calculateGoalsFavor(matches);
    this.goalsOwn = this.calculateGoalsOwn(matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = this.calculateEfficiency(this.totalGames, this.totalPoints);
  } 

  private  calculateTotalPoints(matches: IMatch[]): number {
    let totalPoints = 0;
    for (const match of matches) {  
      if (match.goalsFavor === match.goalsOwn) {
        totalPoints += 1;
    }
    if (match.goalsFavor > match.goalsOwn) {  
      totalPoints += 3;
    }
    if (match.goalsFavor < match.goalsOwn) {
      totalPoints += 0;
    }
  }
  return totalPoints;
}

  private  calculateTotalVictories(matches: IMatch[]): number {
    let totalVictories = 0;
    for (const match of matches) {
      if (match.goalsFavor > match.goalsOwn) {
        totalVictories += 1;
      }
    } return totalVictories;
  }

  private  calculateTotalDraws(matches: IMatch[]): number {
    let totalDraws = 0;
    for (const match of matches) {  
      if (match.goalsFavor === match.goalsOwn) {
        totalDraws += 1;
      }
    } return totalDraws;
  }

  private  calculateTotalLosses(matches: IMatch[]): number {
    let totalLosses = 0;
    for (const match of matches) {
      if (match.goalsFavor < match.goalsOwn) {
        totalLosses += 1;
      }
    } return totalLosses;
  }

  private  calculateGoalsFavor(matches: IMatch[]): number {
    let goalsFavor = 0;
    for (const match of matches) {
      goalsFavor += match.goalsFavor;
    } return goalsFavor;
  }

  private  calculateGoalsOwn(matches: IMatch[]): number {
    let goalsOwn = 0;
    for (const match of matches) {
      goalsOwn += match.goalsOwn;
    } return goalsOwn;
  }

  private  calculateEfficiency(games: number, points: number) {
    const efficiency = Number(((100 * points)/(games*3)).toPrecision(4));
    return efficiency;
  }
}