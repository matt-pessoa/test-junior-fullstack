import express from 'express';
import databaseConnection from './utils/database';

// const usersRoute = require('./routes/users.routes');
// const filesRoute = require('./routes/files.routes');
// const defaultRoute = '/api';

const app = express();
databaseConnection();

app.use(express.json());

// app.use(`${defaultRoute}/users`, usersRoute);
// app.use(`${defaultRoute}/files`, filesRoute);

export default app;
