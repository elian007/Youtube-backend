const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            cb(null, file.originalname)
        }
    }),
    limits: {
        fileSize: 20 * 1024 * 1024
        
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'video/mp4'
        ]
        if(allowdMimes.includes(file.mimetype)){
            cb(null, true)
        }
        else{
            cb(new Error('Formato de vídeo inválido.'))
        }
    }
}
