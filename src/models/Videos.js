const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        text: true,
        required: true
    },
    descricao: {
        type: String,
        text: true,
        required: true

    },
    hashtags: {
        type: String,
        text: true,
        required: true

    },
    video: {
        type: String,
        text: true,
        required: true

    },
    curtidas: {
        type: Number,
        default: 0,
    },
    descurtidas: {
        type: Number,
        default: 0,
    },
    favorito:{
        type: Boolean
    }
},
    {
        timestamps: true
    })
 

module.exports = mongoose.model('Video', VideoSchema)
