const Video = require('../models/Videos')



module.exports = {

    async store(req, res){
        const video = await Video.findById(req.params.id)

        video.descurtidas += 1
        
        await video.save()

        req.io.emit('descurtida', video)

       return res.send(video)
    }
}