const { Router } = require('express')
const router = Router()
const { Sequelize } = require('sequelize');
const { agregarUsuario, modificarUsuario, eliminarUsuario, obtenerUsuarios, obtenerUsuariosXId, restaurarUsuario } = require('../controller/Usuarios/Usuarios')

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuariosXId)
router.post('/', agregarUsuario);
router.put('/:id', modificarUsuario);
router.delete('/:id', eliminarUsuario)
router.patch('/:id/restore', restaurarUsuario)




module.exports = router

