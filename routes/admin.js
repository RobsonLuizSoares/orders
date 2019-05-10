const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Novo sistema de Comandas- Admin')
})


module.exports = router