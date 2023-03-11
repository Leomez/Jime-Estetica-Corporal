const {Router} = require('express')
const router = Router()
const {agregarServicio, traerServicios, traerServicioXId, actaualizarServicio, eliminarServicio} = require('../controller/Servicio/Servicio')

router.get('/', traerServicios)
router.post('/', agregarServicio)
//falta provar a partir de aca...
router.get('/:id', traerServicioXId)
router.put('/:id', actaualizarServicio)
router.delete('/:id', eliminarServicio)


module.exports = router