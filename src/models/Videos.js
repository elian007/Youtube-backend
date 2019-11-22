const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    hashtags: String,
    video: String,
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
    })

//VideoSchema.createIndex({"$**":"text"})

module.exports = mongoose.model('Video', VideoSchema)
