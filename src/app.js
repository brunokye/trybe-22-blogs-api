const express = require('express');
const { userRouters } = require('./routers');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', userRouters);

module.exports = app;
