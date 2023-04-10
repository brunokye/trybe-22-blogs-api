const express = require('express');
const { user } = require('./controllers');

const { signup, login } = user;
const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/user', signup);
app.post('/login', login);

module.exports = app;
