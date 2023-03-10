const { Router } = require('express')
const Usuarios = require('./Usuarios')

const router = Router()

router.use('/usuarios', Usuarios)


module.exports = router