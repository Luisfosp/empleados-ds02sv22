const express = require('express')
const empleadoRuta = express.Router()

//declaramos un objeto de nuestri nideki
let Empleado = require('../models/Empleados')

//agregar un empleado nuevo
empleadoRuta.route('/create').post((req, res )=>{
    Empleado.create(req.body)
    .then((data) => {
        console.log('se agrego un documento')
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
    })
})


//obtener todos los empleados
empleadoRuta.route('/empleados').get((req,res) => {
    Empleado.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//obtener un solo empleado, por su ID
empleadoRuta.route('/empleado/:id').get((req,res) => {
    Empleado.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

//actualizar un empleado 

empleadoRuta.route('/update/:id').put((req, res) => {
    Empleado.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})


//eliminar empleado 
empleadoRuta.route('/delete/:id').delete((req, res) => {
    Empleado.findByIdAndRemove(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = empleadoRuta;