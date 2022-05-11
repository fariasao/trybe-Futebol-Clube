import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  public id!: number;
  
  public homeTeam!: number;
  
  public homeTeamGoals!: number;
  
  public awayTeam!: number;
  
  public awayTeamGoals!: number;
  
  public inProgress!: boolean;
} // no exemplo está com a ! entao copiei.
// mudei para responder o req

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Matches',
  timestamps: false,
});

// relacoes das tabelas - 1 pra n - pra lembrar que é 1 pra n
Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeMatches' });

Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayMatches' });

export default Matches;