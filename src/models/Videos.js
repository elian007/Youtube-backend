const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        text: true
    },
    descricao: {
        type: String,
        text: true
    },
    hashtags: {
        type: String,
        text: true
    },
    video: {
        type: String,
        text: true
    },
    curtidas: {
        type: Number,
        default: 0,
    },
    descurtidas: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Video', VideoSchema)
