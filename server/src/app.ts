import express from 'express';
import sequelize from './utils/database';

const usersRoute = require('./routes/users.routes');
const filesRoute = require('./routes/files.routes');
const defaultRoute = '/api';

sequelize.sync({ force: true }).then(() => {
  console.log('DB is ready');
});

const app = express();

app.use(express.json());

app.use(`${defaultRoute}/users`, usersRoute);
app.use(`${defaultRoute}/files`, filesRoute);

export default app;
