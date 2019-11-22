const Video = require('../models/Videos')



module.exports = {
    async index(req, res){
        const videos = await Video.find().sort('-createdAt')

        return res.json(videos)
    },

    async search(req, res){
        
        const video = await Video.find( { descricao: { $regex: req.params.id} } ).pretty()
        console.log(video)
        return res.json(video)
    },

    async store(req, res){
        const { titulo, descricao, hashtags} = req.body
        const { filename: video} = req.file

        const [nome] = video.split('.')
        const nomeArquivo = `${nome}.mp4`

        const videos = await Video.create({
            titulo,
            descricao,
            hashtags,
            video: nomeArquivo
        })

        req.io.emit('video', videos)
        return res.json(videos)
    }
}