const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
//const db = require('./config/db')


const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/netlink', {
    useNewUrlParser: true
}).then(() => {   
    console.log('Conectado ao Mongodb netlink...')
}).catch((err) => {
    console.log('Houve um erro ao conectar ao Mongodb: ', err)
})
app.listen(PORT, () => {
    console.log('Server listening on port: ', PORT)
})



const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const servicesRouter = require('./routes/services')
const caixasRouter = require('./routes/caixas')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use('/os', servicesRouter)
app.use('/caixas', caixasRouter)

