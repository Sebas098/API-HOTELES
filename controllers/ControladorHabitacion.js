export class ControladorHabitacion{
    constructor(){}
    
    buscarTodas(request,response){
        // Ejercicios logica de negocio
        try{
                // 1. Hay que recibir datos?
                // 2. Intentare conectarme a la BD
                // 3. Envio la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las habitaciones",
                        "datos":"ACA VAN LOS DATOS CONSULTAROS EN LA BD"
        })
        }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las habitaciones "+error,
                        "datos":null 
        }) 
        }
    }
    buscarID(request,response){
        try{    
                // 1. Hay que recibir datos? (si)
                let id=request.params.id
                // 2. Con el id que mando el cliente busco la habitacion en BD
                // 3. Respondo al cliente
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito buscando las habitaciones",
                        "datos":"ACA VAN LOS DATOS CONSULTAROS EN LA BD"
                })      
        }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error buscando las habitaciones "+error,
                        "datos":null 
                }) 
        }
    }
    modificar(request,response){
        try{
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                let datosModificar=request.body
                // 2. Modificar en BD
                // 3. Enviar la respuesta
                response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito modificando la habitacion",
                        "datos":null
                })  
        }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error modificando la habitacion "+error,
                        "datos":null 
                }) 
        }
    }
    registrar(request,response){
        try{
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                let datosRegistrar=request.body
                // 2. Modificar en BD
                // 3. Enviar la respuesta
      response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito modificando la habitacion",
                        "datos":null
                })  
        }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error modificando la habitacion "+error,
                        "datos":null 
                }) 
        }
    }
    eliminar(request,response){
        try{
                // 1. Hay que recibir datos? (si)
                let id = request.params.id
                // 2. Modificar en BD
                // 3. Enviar la respuesta
      response.status(200).json({
                        "estado":true,
                        "mensaje":"Exito borrando la habitacion",
                        "datos":null
                })  

        }catch(error){
                response.status(400).json({
                        "estado":false,
                        "mensaje":"Error borrando la habitacion "+error,
                        "datos":null 
                }) 
        }
    }
}
