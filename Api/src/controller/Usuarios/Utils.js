const { DomiciliosPrueba } = require('../Domicilio/Utils.js')

async function usuariosPrueba() {
    const data = await DomiciliosPrueba();
    // console.log(data[0].dataValues.id);
    const usuarios = [
        {        
            "nombre": "Juan",
            "apellido": "Pérez",
            "email": "juanperez@example.com",
            "username": "juanperez",
            "pass": "mypassword",
            "edad": "30",
            "telefono": "123456789",
            "rol": "empleado",
            "foto": "https://example.com/juanperez.jpg",
            "domicilioId": data[0].dataValues.id        
        },
        {        
            "nombre": "María",
            "apellido": "García",
            "email": "mariagarcia@example.com",
            "username": "mariagarcia",
            "pass": "mypassword",
            "edad": "25",
            "telefono": "987654321",
            "rol": "cliente",
            "foto": "https://example.com/mariagarcia.jpg",
            "domicilioId": data[1].dataValues.id    
        },
        {        
            "nombre": "Pedro",
            "apellido": "López",
            "email": "pedrolopez@example.com",
            "username": "pedrolopez",
            "pass": "mypassword",
            "edad": "35",
            "telefono": "555555555",
            "rol": "cliente",
            "foto": "https://example.com/pedrolopez.jpg",
            "domicilioId": data[2].dataValues.id
        },
        {       
            "nombre": "Ana",
            "apellido": "Martínez",
            "email": "anamartinez@example.com",
            "username": "anamartinez",
            "pass": "mypassword",
            "edad": "40",
            "telefono": "777777777",
            "rol": "cliente",
            "foto": "https://example.com/anamartinez.jpg",
            "domicilioId": data[1].dataValues.id
        },
        {    
            "nombre": "Juana",
            "apellido": "Gomez",
            "email": "juanagomez@example.com",
            "username": "juanperez",
            "pass": "mypassword",
            "edad": "30",
            "telefono": "33333333",
            "rol": "cliente",
            "foto": "https://example.com/juanperez.jpg",
            "domicilioId": data[2].dataValues.id
        },
        {       
            "nombre": "Marío",
            "apellido": "García",
            "email": "mariogarcia@example.com",
            "username": "mariogarcia",
            "pass": "mypassword",
            "edad": "39",
            "telefono": "76564321",
            "rol": "cliente",
            "foto": "https://example.com/mariogarcia.jpg",
            "domicilioId": data[1].dataValues.id
        },
        {        
            "nombre": "Martin",
            "apellido": "Gerez",
            "email": "martingerez@example.com",
            "username": "martingerez",
            "pass": "mypassword",
            "edad": "27",
            "telefono": "55554444",
            "rol": "cliente",
            "foto": "https://example.com/martingerez.jpg",
            "domicilioId": data[2].dataValues.id
        }
    ]
    return usuarios
}


module.exports = { usuariosPrueba }
