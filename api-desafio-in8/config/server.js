const express = require('express');
const env = require('dotenv').config();
const cors =  require('cors');

const routes = require('./../src/routes');

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, HOST, () => {

    console.log('Servidor escutando na porta: ' + process.env.APP_PORT);
});