import express from 'express';
import historicoInflacao from './dados/dados.js';

const app = express();

app.get('/historicoInflacao', (req, res) => {
    res.json(historicoInflacao)
});


/*
// Rota de teste da API
app.get('/historicoInflacao/teste', (req, res) => {
    res.send({ "teste": "teste"});
})
*/

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});