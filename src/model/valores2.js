const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor2 = new Schema({
    nom: { type: String, default: "Temperatura actual" },
    temperatura: { type: String, default: "Null" },
    fecha: { type: Date, default: Date.now }
});
module.exports = mongoose.model('valores2', Valor2);