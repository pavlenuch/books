// import * as uuid from 'uuid'
const { uuid } = require('uuid');
const { path } = require('path');
// import * as path from 'path'

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('../client/static', fileName)
            file.mv(filePath)
            return fileName
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FileService