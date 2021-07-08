const { Router } = require('express');
const express = require('express');
const routes = express.Router();
//const model = require('../model/valores')();
const Valor = require('../model/valores');
const valores2 = require('../model/valores2');
const Valor2 = require('../model/valores2');



//Funcion asincrona
//copn el await esperara valores
routes.get('/', async(req, res) => {
    //const valores = await Valor.find();
    const valores2 = await Valor2.find();

    //console.log(valores);
    console.log(valores2);

    //res.json(valores2);
    //res.json(valores);

    res.render('index.ejs', {
        //valores
        valores2

    })


});
//
routes.post('/add', async(req, res) => {
    //const valor2 = new Valor2(req.body);
    //const valor = new Valor(req.body);
    //await valor2.save();
    //await valor.save();
    //
    //res.redirect('/');
    //res.json(valor);
    //res.json(valores2);
    const valor2 = new Valor2(req.body);
    await valor2.save();
    //
    res.redirect('/');
});
/*
routes.post('/add1', async(req, res) => {
    const valor2 = new Valor2(req.body);
    await valor2.save();
    //
    res.redirect('/');
    //res.json(valor);
    //res.json(valores2);

});*/


module.exports = routes;