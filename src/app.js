const express = require('express');
const { login } = require('./controllers');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);

module.exports = app;
