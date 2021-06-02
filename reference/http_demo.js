const http = require('http')

// Create a server object
http.createServer((req, res) => {
  // Write a response when there's a request
  res.write('Hello world')
  res.end()
}).listen(5000, () => console.log('Server running...'))