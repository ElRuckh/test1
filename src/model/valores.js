const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    idVaca: String,
    madre: String,
    padre: String,
    fecha_nacimiento: { type: Date, default: Date.now }
});
module.exports = mongoose.model('valores', Valor);