
const moment = require('moment')

const labels = [ 
  { id: 'aberta', name: 'aberta' }, 
  { id: 'executando', name: 'executando' },
  { id: 'fechada', name: 'fechada' }
]

const services = [
  { id: 'Colorida Jato', name: 'Colorida Jato' },
  { id: 'Colorida Laser', name: 'Colorida Laser' },
  { id: 'Preto e Branco', name: 'Preto e Branco' }
]

const list = async ({ Order }, req, res) => {
  const order = await Order.find({}).sort({number: -1})
      res.render('os/comandas', {order, labels, services, moment })
}

const createOs = async ({ Order }, req, res ) => {
  const order = new Order (req.body)
  await order.save().then(() => {
    res.redirect('/os/list')
  }).catch((err) => {
      if(err){console.log('erro no create: ',err)}
  })     
}

const newFormOs = (req, res) =>{
  res.render('os/nova')
}

const excluirOs = async ({ Order }, req, res) => {
  await Order.deleteOne({ _id: req.params.id })
    res.redirect('/os/list')
}

const editOs = async ({ Order }, req, res) => {
  const order = await Order.findOneAndUpdate( { _id: req.params.id }, {
    client: req.body.client,
    phone: req.body.phone,
    socialMedia: req.body.socialMedia,
    copy: req.body.copy,
    copyQ: req.body.copyQ,
    sheets: req.body.sheets,
    size: req.body.size,
    otherServices: req.body.otherServices,
    color: req.body.color,
    delivery: req.body.delivery,
    valueJobTotal: req.body.valueJobTotal,
    valueJobInit: req.body.valueJobInit,
    isSold: req.body.isSold,
    //number: req.body.number,
    status: req.body.status,
    comments: req.body.comments
  })
    order.client= req.body.client
    order.phone= req.body.phone
    order.socialMedia= req.body.socialMedia
    order.copy= req.body.copy
    order.copyQ= req.body.copyQ
    order.sheets= req.body.sheets
    order.size= req.body.size
    order.otherServices= req.body.otherServices
    order.color= req.body.color
    order.delivery= req.body.delivery
    order.valueJobTotal= req.body.valueJobTotal
    order.valueJobInit= req.body.valueJobInit
    order.isSold= req.body.isSold
    //order.number= req.body.number
    order.status= req.body.status
    order.comments= req.body.comments
    
    
    
      res.redirect('/os/list')
    
}

const editFormOs = async ({ Order }, req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
     res.render('os/editarOs', { order, labels, services, moment } )  
}

const info = async ({ Order }, req, res ) => {
  const order = await Order.findOne({ _id: req.params.id })
  res.render('os/info', { order })
}

const addComentario = async ({Order}, req, res) => {
  await Order.updateOne({ _id: req.params.id }, {$push: {comments: req.body.comentario}})
  res.redirect('/os/info/'+req.params.id)
}

const searchOsF = async ({ Order }, req, res) => {
  const order = await Order.find({ status: { $all: 'fechada'} })
    res.render('os/osAbertas', { order, labels, services, moment})
}

const searchOsA = async ({ Order }, req, res) => {
  const order = await Order.find({ status: { $all: 'aberta'} })
    res.render('os/osAbertas', { order, labels, services, moment})
}

const searchOsE = async ({ Order }, req, res) => {
  const order = await Order.find({ status: { $all: 'executando'} })
    res.render('os/osAbertas', { order, labels, services, moment})
}

module.exports = {
    list,
    createOs,
    newFormOs,
    excluirOs,
    editOs,
    editFormOs,
    info,
    addComentario,
    searchOsF,
    searchOsA,
    searchOsE
}