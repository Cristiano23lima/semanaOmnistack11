const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();

app.use(cors());

//aceitar requisiçoes do tipo JSON
app.use(express.json());

//importando as rotas
app.use(routes);

app.listen(3333);