const mongoose = require('mongoose');
const express = require('express');
const Estudiante = require('./models/schema')
const app = express();
const mongodB = 'mongodb://127.0.0.1:27017/estudiantes';


//rutas dinamicas
app.use(express.urlencoded({extended: true}))//para usar rutas dinamicas
app.use(express.json())//Esa expresion lee lo que vos pasas en el body de insomnia, y si es un json lo convierte a objeto de js

app.get('/', async (req, res) => {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes) 
});

//=============================2-1=================================
//Creamos una funcion que busca por el valor ingresado en la ruta y luego oculta las cosas inecesarias
app.get('/api/estudiantes/grado/:valor', async (req, res) => {
  //requerimos el valor ingresado
    const valor = req.params.valor
    console.log(valor)
    //buscamos en la categoria grado el 'valor' ingresado
    const estudiantes = await Estudiante.find({grade:valor},{subjects:0, orientation:0,"grade": 0});
    res.json(estudiantes) 
});

//=============================2-2=================================
//Creamos una funcion que busca por el valor ingresado en la ruta y luego oculta las cosas inecesarias
app.get('/api/estudiantes/orientacion/:valor', async (req, res) => {
  //requerimos el valor ingresado
    const valor = req.params.valor
    console.log(valor)
    //buscamos en la categoria grado el 'valor' ingresado
    const estudiantes = await Estudiante.find({orientation:valor},{age:0, orientation:0});
    res.json(estudiantes) 
});

//=============================2-3=================================
app.get('/api/estudiantes/edad/mayor-de-edad', async (req, res) => {
    //buscamos en la categoria grado el 'valor' ingresado
    const estudiantes = await Estudiante.find({$and:[{"age":{$gte: 17}}]},{_id:0,age:0, orientation:0,subjects:0}).sort({"name":1});

    res.json(estudiantes) 
});

//=============================2-4=================================
app.get('/api/estudiantes/asignatura/:asig/:grado', async (req, res) => {
  //requerimos el valor ingresado
    const asignatura = req.params.asig
    console.log(asignatura)
    const grados = req.params.grado
    console.log(grados)
    const estudiantes = await Estudiante.find({$and: [{orientation: asignatura,grade:grados}]});
    res.json(estudiantes) 
});




//=============================2-5=================================
app.post('/api/estudiantes/nuevo' , async (req, res) => {
    const newUsers = await Estudiante.create(req.body);
    res.json(newUsers)     
    console.log(req.body)
  

});



mongoose.connect(mongodB)
 .then(async () => {
   app.listen('8080', () => {console.log("Server Iniciado")})
 })

