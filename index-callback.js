const fs = require('fs')
const path = require('path')

// 读取文件
fs.readFile(path.join(__dirname, 'files', 'file1'), (err, buf) => {
    if (err) throw err
    console.log(buf.toString()) 
})

// 写入文件
fs.writeFile(path.join(__dirname, 'files', 'file3'), '欢迎光临', (err) => {
    if (err) throw err
    console.log('写入完成') 

  	// 在文件末尾追加
    fs.appendFile(path.join(__dirname, 'files', 'file3'), '\n\n男宾三位', (err) => {
        if (err) throw err
        console.log('追加完成') 

      	// 修改文件名称
        fs.rename(path.join(__dirname, 'files', 'file3'), path.join(__dirname, 'files', 'file3-rename'), (err) => {
            if (err) throw err
            console.log('改名完成') 
    
        })
    })
})
