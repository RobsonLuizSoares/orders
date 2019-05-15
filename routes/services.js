const express = require('express')
const router = express.Router()
const servicesController = require('../controllers/services')


const Order = require('../models/order')

const models = {
    Order
}

router.get('/list', servicesController.list.bind(null, models))

router.get('/nova', servicesController.newFormOs)
router.post('/nova', servicesController.createOs.bind(null, models))

router.get('/excluir/:id' , servicesController.excluirOs.bind(null, models))

router.post('/editar/:id', servicesController.editOs.bind(null, models))
router.get('/editar/:id', servicesController.editFormOs.bind(null, models))
router.get('/info/:id', servicesController.info.bind(null, models))
router.post('/info/:id', servicesController.addComentario.bind(null, models))

router.get('/buscar/fechada', servicesController.searchOsF.bind(null, models))
router.get('/buscar/aberta', servicesController.searchOsA.bind(null, models))
router.get('/buscar/executando', servicesController.searchOsE.bind(null, models))


module.exports = router