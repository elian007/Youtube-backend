const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')


const VideoController = require('./controller/VideoController')
const CurtidasController = require('./controller/CurtidasController')
const DescurtirController = require('./controller/DescurtirController')

const routes = new express.Router()
const upload = multer(uploadConfig)


routes.get('/videos', VideoController.index)
routes.post('/videos', upload.single('video'), VideoController.store)
routes.post('/videos/:id/curtida', CurtidasController.store)
routes.post('/videos/:id/descurtida', DescurtirController.store)

module.exports = routes