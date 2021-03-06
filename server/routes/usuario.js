const express = require('express');
const app = express();
const Usuario = require('../models/userModels');
const {validarToken} = require('../middlewares/token');

//Crear usuario
app.get('/user',(req, res) => {
    Usuario.find({}, (err, usuarioBD) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            usuarioBD
        });
    });
});

//Crear Usuario
app.post('/user', (req, res) => {
    let body = req.body;
    let user = new Usuario({
        nombre: body.nombre,
        apellidos: body.apellidos,
        email: body.email,
        userName: body.userName,
        password: body.password
    });

    user.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            user: usuarioDB
        });
    });
});

//Actualizar Usuario
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Usuario.findByIdAndUpdate(id, body, (err, usuarioBD) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!usuarioBD) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            });
        }
        res.status(200).json({
            ok: true,
            message: 'Usuario actualizado'
        });
    });
});

//Eliminar usuario
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    Usuario.findByIdAndDelete(id, (err, usuarioBorrado) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            });
        }
        res.status(200).json({
            ok: true,
            usuario: usuarioBorrado,
            message: 'Usuario borrado'
        });
    });
});

module.exports = app;