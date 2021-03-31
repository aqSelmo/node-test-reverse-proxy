const express = require('express');

const app = express();

app.get("/", (request, response) => response.send('Teste'));

app.listen(3000, '0.0.0.0', () => console.log('funcionando'));