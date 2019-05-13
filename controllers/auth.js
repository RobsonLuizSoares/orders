
const login = ( req, res) => {
    res.render('login')
}

const auth = async({ User }, req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if(user) { 
    const isValid = await user.checkPassword(req.body.password)

    if(isValid){
        req.session.user = user
        res.redirect('/admin')
    }else{
        res.redirect('/login')
    }
    }else{
        res.redirect('/login')
    }
}


module.exports = { login, auth }