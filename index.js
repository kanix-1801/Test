const http = require('http')
const fs = require('fs')

http
  .createServer(function (req, res) {
    // Read the contents of the HTML file
    fs.readFile('index.html', function (err, data) {
      if (err) {
        // If there was an error reading the file, send an error response
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Error loading HTML file')
      } else {
        // If the file was successfully read, send the contents as the response
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  })
  .listen(8080)
