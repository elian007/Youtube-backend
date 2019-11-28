const Video = require('../models/Videos')



module.exports = {

    async index(req, res, next){
        const videos = await Video.find().sort('-createdAt')

        return res.status(200).json(videos)
    },

    async search(req, res, next){
        const pesquisa = req.params.value
        const video = await Video.find( { descricao:  { $regex: pesquisa, $options: "si" }  } )
        
        if(erq.params.value === video){
            return res.status(200).json(video)
        }
        return res.status(404).json("Video não encontrado!")
    },
    
    async store(req, res, next){
        const content = req.body
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

        if(content.id){
            req.io.emit('video', videos)
            return res.status(201).json(videos)
        }
        return res.status(400).json("video não adicionado")

        
    }
}