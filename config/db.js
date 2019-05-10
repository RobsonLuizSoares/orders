if(process.env.NODE_ENV == 'production'){
    module.exports = { mongoURI: 'mongodb+srv://lyapetry:250916@cluster0-oxifo.gcp.mongodb.net/test?retryWrites=true'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/netlink'}
}
