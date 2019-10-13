const os = require('os')

const infoObj = {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    userInfo: os.userInfo(),
    time: os.uptime(),
    cpu: os.cpus(),
    hostname: os.hostname(),
    network: os.networkInterfaces()
}

module.exports = infoObj