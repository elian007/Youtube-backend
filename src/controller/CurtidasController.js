const Video = require('../models/Videos')



module.exports = {

    async store(req, res){
        const video = await Video.findById(req.params.id)

        video.curtidas += 1
        
        await video.save()

        req.io.emit('curtida', video)

       return res.send(video)
    }
}