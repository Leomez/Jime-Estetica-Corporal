const { Router } = require('express')
const router = Router()
const { Sequelize } = require('sequelize');
const { agregarUsuario, modificarUsuario, eliminarUsuario, obtenerUsuarios, obtenerUsuarioXId, restaurarUsuario, loginUsuario } = require('../controller/Usuarios/Usuarios')

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarioXId)
router.post('/', agregarUsuario);
router.post('login', loginUsuario)
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario)
router.patch('/:id/restore', restaurarUsuario)




module.exports = router

