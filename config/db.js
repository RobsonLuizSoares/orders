require('dotenv')
if(process.env.NODE_ENV == 'production'){
    module.exports = { mongoURI: 'mongodb+srv://lya:lya250916@netlink-rfdt7.mongodb.net/test?retryWrites=true&w=majority'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/netlink'}
}
