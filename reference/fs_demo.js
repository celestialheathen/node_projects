const fs = require('fs') // File system module
const path = require('path')

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) 
//     throw err
//   console.log('Folder created...')
// })

// Create and write to file with a callback to append
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello James", err => {
//   if (err) 
//     throw err
//   console.log('File written to...')

//   // Append to end of file
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love Node.js", err => {
//     if (err) 
//       throw err
//     console.log('File written to...')
//   })
// })


// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) 
//     throw err
//   console.log(data)
// })

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
          path.join(__dirname, '/test', 'helloworld.txt'), 
          (err) => {
          if (err) 
            throw err
          console.log('File renamed.')
})