const express = require('express')
const router = express.Router()
const restrictController = require('../controllers/restrict')

const User = require('../models/user')

const models = {
    User
}

router.use((req, res, next) => {
    if('user' in req.session){
        if(req.session.user.roles.indexOf('restrict')>=0){
            return next()
        }else{
            res.redirect('/')
        }
    }
   res.redirect('/login')
})

router.get('/', restrictController.home)

router.get('/novousuario', restrictController.newUser)
router.post('/novousuario', restrictController.createUser.bind(null, models))

module.exports = router