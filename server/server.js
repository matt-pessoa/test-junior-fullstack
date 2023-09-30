const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo'] });
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
