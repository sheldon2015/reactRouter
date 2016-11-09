const fs = require('fs');
let dir = fs.readdirSync(__dirname)

console.log(dir)

dir.concat(['aaaa', 'bbbb'])

console.log(dir)


