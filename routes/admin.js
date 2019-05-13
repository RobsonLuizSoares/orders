const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('admin/home')
})
router.get('/results', (req, res) => {
    res.send('RESULTS ADMIN')
})

module.exports = router