import express from 'express';

// const filesRoute = require('./routes/files.routes')
// const usersRoute = require('./routes/users.routes')
const defaultRoute = '/api';

const app = express();

app.use(express.json());

// app.use(`${defaultRoute}/files`, filesRoute);
// app.use(`${defaultRoute}/users`, usersRoute);

export default app;
