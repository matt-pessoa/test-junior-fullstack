import express from 'express';
import sequelize from './utils/database';
import cors from 'cors';

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const usersRoute = require('./routes/users.routes');
const filesRoute = require('./routes/files.routes');
const defaultRoute = '/api';

sequelize.sync({ force: true }).then(() => {
  console.log('DB is ready');
});

const app = express();

app.use(cors());
app.use(express.json());

app.use(`${defaultRoute}/users`, usersRoute);
app.use(`${defaultRoute}/files`, filesRoute);

export default app;
