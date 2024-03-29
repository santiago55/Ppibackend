const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let ahorroSchema = Schema({
    descripcion: {
        type: String,
        required: [true, 'La descripcion es requerido']
    },
    valor: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    date: {
        type: Date,
        required: [true, 'la fecha es necesaria']
    },
    usuario: {
        type: Schema.Types.ObjectId, ref: 'Usuario'
    }
});

ahorroSchema.plugin(uniqueValidator, { message: '{PATH} ya existe' });
module.exports = mongoose.model('ahorro', ahorroSchema);