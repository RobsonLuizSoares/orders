const labels = [ 
  { id: 'aberta', name: 'aberta' }, 
  { id: 'executando', name: 'executando' },
  { id: 'fechada', name: 'fechada' }
]

const list = async ({ Order }, req, res) => {
  const order = await Order.find({}).sort({date: 1})
      res.render('os/comandas', {order, labels })
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
  const order = await Order.findOneAndUpdate({ _id: req.params.id }, {comments: req.body.comments} )
    order.client = req.body.client
    order.number = req.body.number
    order.status = req.body.status
    order.comments = req.body.comments
    
    
      res.redirect('/os/list')
    
}

const editFormOs = async ({ Order }, req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
     res.render('os/editarOs', { order, labels } )  
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
    res.render('os/osAbertas', { order, labels})
}

const searchOsA = async ({ Order }, req, res) => {
  const order = await Order.find({ status: { $all: 'aberta'} })
    res.render('os/osAbertas', { order, labels})
}

const searchOsE = async ({ Order }, req, res) => {
  const order = await Order.find({ status: { $all: 'executando'} })
    res.render('os/osAbertas', { order, labels})
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