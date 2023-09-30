import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';

class File extends Model {}

File.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    favorite_sport: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'file',
  }
);

export default File;
