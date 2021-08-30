const fsPromises = require('fs').promises
const path = require('path')

const fileFunc = async () => {
    try {
        const buf = await fsPromises.readFile(path.join(__dirname, 'files', 'file1'))
        console.log(buf.toString())

        await fsPromises.unlink(path.join(__dirname, 'files', 'file1'))

        await fsPromises.writeFile(path.join(__dirname, 'files', 'file5'), buf)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'file5'), '\n\n欢迎光临')
        await fsPromises.rename(path.join(__dirname, 'files', 'file5'), path.join(__dirname, 'files', 'file5-rename'))
        const newBuf = await fsPromises.readFile(path.join(__dirname, 'files', 'file5-rename'))
        console.log(newBuf.toString())
    } catch (error) {
        console.log(error)
    }
}

fileFunc()
