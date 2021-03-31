const express = require('express');

const app = express();

app.get("/", (request, response) => response.send('Teste'));

app.listen(80, '0.0.0.0', () => console.log('funcionando'));