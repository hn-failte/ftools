const fs = require('fs')

const generate = (pathname, data) => {
    fs.writeFileSync(pathname, data)
}

module.exports = {
    generate
}