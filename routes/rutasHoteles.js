//ESPACIO PARA DEFINIR LAS RUTAS O ENDPOINTS ESPECIFICOS DE SU API
// todas deberian ir en un solo archivo mientras sean del mismo api
import express from 'express';

// IMPORTO LOS CONTROLADORES
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js';
import { ControladorReservas } from '../controllers/ControladorReserva.js';

export let rutasAPI=express.Router(); //nos permite cambiar entre rutas

// ACA PONE SUS ENDPOINTS

//añaddir
rutasAPI.post('/api/habitaciones')
//buscar general
rutasAPI.get('/api/habitaciones')
//buscar por ID
rutasAPI.get('/api/habitacion/:id') //url dinamica
//modificar
rutasAPI.put('/api/habitaciones/:id')
//eliminar
rutasAPI.delete('/api/habitaciones/:id')



//RESERVAS
//añadir
rutasAPI.post('/api/reservas')
//buscar general
rutasAPI.get('/api/reservas')
//buscar por ID
rutasAPI.get('/api/reserva:id')
//modificar
rutasAPI.put('/api/reservas:id')
//eliminar
rutasAPI.delete('/api/reservas:id')

    
