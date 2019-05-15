const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)



const OrderSchema = mongoose.Schema({
    client: {
        type: String,
    },
    phone:{
        type: String,
    },
    socialMedia: {
        type: String,
    },
    copy: {
        type: String,
    },
    copyQ: {
        type: Number,
    },
    sheets: {
        type: String,
    },
    size: {
        type: String,
    },
    otherServices: {
        type: String,
    },
    color: {
        type: String,
    },
    register: {
        type: Date,
        default: new Date()
    },
    delivery: {
        type: Date,
    },
    valueJobTotal: {
        type: Number,
    },
    valueJobInit:  {
        type: Number,
    },
    isSold:  {
        type: String,
    },
    box:  {
        type: String,
    },
    number: {
        type: Number,
    },
    status: {
        type: String,
        enumValue: [ 'aberta', 'executando','fechada']
    },
    comments:  {
        type: [String]
    },   
})
OrderSchema.plugin(AutoIncrement, {id: 'order_seq', inc_field: 'number', collection_name: 'numOs'})

const Order = mongoose.model('Order', OrderSchema)



module.exports = Order