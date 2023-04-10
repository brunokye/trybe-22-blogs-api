const express = require('express');
const { user } = require('./controllers');
const { validateCredentials } = require('./middlewares');

const { signup, login } = user;
const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/user', validateCredentials, signup);
app.post('/login', login);

module.exports = app;
