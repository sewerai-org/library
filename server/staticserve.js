const StaticFileHandler = require('serverless-aws-static-file-handler')
const path = require('path')

const clientFilesPath = path.join(__dirname, "../public/")
const fileHandler = new StaticFileHandler(clientFilesPath)

module.exports.handler = async (event, context) => {
    return fileHandler.get(event, context)
}