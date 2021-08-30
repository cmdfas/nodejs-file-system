const fs = require('fs')

// 判断文件夹是否存在
if (!fs.existsSync('./new')) {
  	// 创建文件夹
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log('文件夹创建成功')
    })
}

if (fs.existsSync('./new')) {
  	// 删除文件夹
    fs.rmdir('./new', (err) => {
        if (err) throw err
        console.log('文件夹删除成功')
    })
}