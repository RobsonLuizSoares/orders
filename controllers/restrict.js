const home =  (req, res) => {
    res.render('restrict/home')
}

const newUser = (req, res) => {
    res.render('restrict/newUser')
}

const createUser = async ({ User }, req, res ) => {
    const user = new User (req.body)
    await user.save().then(() => {
      res.redirect('/restrict')
    }).catch((err) => {
        if(err){console.log('erro no create: ',err)}
    })     
  }


module.exports = {
    home, newUser, createUser
}