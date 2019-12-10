const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const cache = require('express-redis-cache')({ client: require('redis').createClient(), expire: 60 });

// cache.on('error', function (error) {
//     throw new Error(error);
//   });


const VideoController = require('./controller/VideoController')
const CurtidasController = require('./controller/CurtidasController')
const DescurtirController = require('./controller/DescurtirController')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/playlist', cache.route(), VideoController.playlist)
routes.get('/videos', cache.route(), VideoController.index)
routes.get('/videos/:value', cache.route(), VideoController.search)
routes.post('/videos', upload.single('video'), VideoController.store)
routes.post('/videos/:id/curtida', CurtidasController.store)
routes.post('/videos/:id/descurtida', DescurtirController.store)

module.exports = routes