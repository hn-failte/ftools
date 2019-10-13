const generate = require('./index').generate;

const obj = {
    a: 1,
    b: 2
}

generate("obj.json", JSON.stringify(obj))