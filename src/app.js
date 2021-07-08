const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index.js');
//path es la carpeta origen 
const path = require('path');

const usser = "Aaronadm";
const password = "HtoetxvO60Qgjg4K";
const dbName = "io";
const url = `mongodb+srv://${usser}:${password}@cluster0.md3dq.mongodb.net/${dbName}?retryWrites=true&w=majority`;



//Escuchar serivor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');



//base de datos conexion
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(bd => console.log('BD se conecto'))
    .catch(err => console.log("Error de conexion", err));

//middleware: funcion que se ejecuta siempre que se realice una peticion
app.use(log('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

//RUTAS 
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('servidor funcionando en el puerto', app.get('port'))
});