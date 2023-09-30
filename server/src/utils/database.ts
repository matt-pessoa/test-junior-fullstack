import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite',
});

export default sequelize;
