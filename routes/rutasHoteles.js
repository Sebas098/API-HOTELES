//ESPACIO PARA DEFINIR LAS RUTAS O ENDPOINTS ESPECIFICOS DE SU API
// todas deberian ir en un solo archivo mientras sean del mismo api
import express from 'express';

export let rutasAPI=express.Router(); //nos permite cambiar entre rutas

// ACA PONE SUS ENDPOINTS

//añaddir
rutasAPI.post('/api/habitaciones', function (req, res) {
    res.send('estoy guardando una habitacion')
})

//buscar general
rutasAPI.get('/api/habitaciones', function (req, res) {
    res.send('buscando todas las habitaciones')
})


//buscar por ID
rutasAPI.get('/api/habitacion', function (req, res) {
    res.send('buscando habitacion')
})


//modificar
rutasAPI.put('/api/habitaciones', function (req, res) {
    res.send('estoy actualizando una habitacion')
})


//eliminar
rutasAPI.delete('/api/habitaciones', function (req, res) {
    res.send('estoy eliminando una habitacion')
})


//RESERVAS
//añadir
rutasAPI.post('/api/reservas', function (req, res) {
    res.send('estoy guardando una reserva')
})

//buscar general
rutasAPI.get('/api/reservas', function (req, res) {
    res.send('buscando todas las reservas')
})


//buscar por ID
rutasAPI.get('/api/reserva', function (req, res) {
    res.send('buscando reserva')
})


//modificar
rutasAPI.put('/api/reservas', function (req, res) {
    res.send('estoy actualizando una reserva')
})


//eliminar
rutasAPI.delete('/api/reservas', function (req, res) {
    res.send('estoy eliminando una reserva')
})

    