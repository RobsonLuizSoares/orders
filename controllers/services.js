const labels = [ 
  { id: 'aberta', name: 'aberta' }, 
  { id: 'executando', name: 'executando' },
  { id: 'fechada', name: 'fechada' }
]

const list = async ({ Order }, req, res) => {
  const order = await Order.find({})
      res.render('os/comandas', {order, labels })
}

const createOs = async ({ Order }, req, res) => {
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
  const order = await Order.findOne({ _id: req.params.id })
    order.client = req.body.client
    order.number = req.body.number
    order.status = req.body.status
    await order.save().then(() => {
      res.redirect('/os/list')
    }).catch((err) => {
      if(err){ console.log( 'Erro ao editar Os: ', err)}
    })
}

const editFormOs = async ({ Order }, req, res) => {
  const order = await Order.findOne({ _id: req.params.id })
     res.render('os/editarOs', { order, labels } )  
}

module.exports = {
    list,
    createOs,
    newFormOs,
    excluirOs,
    editOs,
    editFormOs
}