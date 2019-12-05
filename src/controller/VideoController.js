const Video = require('../models/Videos')



module.exports = {

    async playlist(req, res, next){

        const videos = await Video.find({favorito: true})
        if(!videos){
            return res.sendStatus(404)
        }
            return res.status(200).json(videos)
    },


    async index(req, res, next){
        const videos = await Video.find().sort('-createdAt')

        if(!videos){
            return res.sendStatus(404)
        }
            return res.status(200).json(videos)
    },

    async search(req, res, next){
        const pesquisa = req.params.value
        const video = await Video.find( { descricao:  { $regex: pesquisa, $options: "si" }  } )
        
        if(!video){
            return res.sendStatus(404)
        }
            return res.status(200).json(video)
      
    },
    
    async store(req, res, next){
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

        if(!videos){
            return res.sendStatus(400).json('video não adicionado')
        }

            req.io.emit('video', videos)
            
            return res.status(201).json(videos)
        
       

        
    }
}