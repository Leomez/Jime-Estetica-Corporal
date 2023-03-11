const { Router } = require('express')
const Usuarios = require('./Usuarios')
const Servicios = require('./Servicios')

const router = Router()

router.use('/usuarios', Usuarios)
router.use('/servicios', Servicios)


module.exports = router