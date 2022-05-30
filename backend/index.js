const express = require('express');
const routes = require('./src/routes');
const app = express();

app.use(express.json());
app.use(routes);
app.listen(4000,() =>console.log("servidor rodando na porta 4000"));
