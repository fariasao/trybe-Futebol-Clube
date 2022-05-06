import { DataTypes, Model } from 'sequelize'; 
import db from '.';

class Teams extends Model {
  public id!: number;
  public teamName!: string; // tem q ser camel case!!
}

Teams.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'Teams',
    timestamps: false,
  })

export default Teams;