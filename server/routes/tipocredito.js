const express = require('express');
const app = express();
let Tipo = require('../models/tipocreditoModels');

//Crear tipo
app.post('/tipocredito', (req, res) => {
    let body = req.body;
    let tipo = new Tipo({
        nombre: body.nombre
    });
    tipo.save((err, tipoBD) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            tipoBD
        });
    });
});

app.get('/tipocredito/', (req, res) => {
    Tipo.find((err, tipoBD) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            tipoBD
        });
    })
});

module.exports = app;

