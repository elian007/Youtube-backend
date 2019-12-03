const app = require('./index')


const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next)=>{
    req.io = io
    next()

})
server.listen(process.env.PORT || 3030)