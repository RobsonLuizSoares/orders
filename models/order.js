const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)



const OrderSchema = mongoose.Schema({
    client: {
        type: String,
    },
    number: {
        type: Number,
        
    }, 
    status: {
        type: String,
        enumValues: [ 'aberta', 'executando','fechada']
    },
    comments:  {
        type: [String]
    }   
})
OrderSchema.plugin(AutoIncrement, {id: 'order_seq', inc_field: 'number', collection_name: 'numOs'})

const Order = mongoose.model('Order', OrderSchema)



module.exports = Order