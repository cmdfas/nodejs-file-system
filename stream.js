const fs = require('fs')

// 读取文件流
const rs = fs.createReadStream('./files/file2', { encoding: 'utf8' })
// 写入文件流
const ws = fs.createWriteStream('./files/new-file2')

// rs.on('data', (chunk) => {
//     ws.write(chunk)
// })

rs.pipe(ws)