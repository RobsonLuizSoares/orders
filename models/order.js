const mongoose = require('mongoose')
const db = require('../config/db')

const OrderSchema = mongoose.Schema({
    client: {
        type: String,
    },
    number: {
        type: Number
    }, 
    status: {
        type: String,
        enumValues: [ 'aberta', 'executando','fechada']
    },
    products: {
        type: String,
    }
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order