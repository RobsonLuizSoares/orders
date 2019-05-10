const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Páginas de Caixas')
})


module.exports = router