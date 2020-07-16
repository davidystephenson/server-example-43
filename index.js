// 1. Make a project directory (mkdir example)
// 2. Go into the directory (cd example)
// 3. Initialize npm (npm init -y)
// 4. Install express (npm i express)
// 5. Make a script (code index.js)

// 6. import express from npm
const express = require('express')

// 7. Make a server
const app = express()

// 8. Choose a port (1000 to 10000)
const port = 3000

// 8. Tell the server to listen
// 8.1 port (number) - what number do you write in your url
// 8.2 confirmation callback (function) - runs when you start the server
app.listen(port, () => console.log(`Listening on :${port}`))

// 9. Register an endpoint (app.get)
// 9.1 path (string) - what goes at the end of the url
// 9.2 handler callback (function) - how does the server respond
// 9.2.1 request (object) - what did the user ask for (later)
// 9.2.2 response (object) - how do we respond

const path = '/test'

function handler (request, response) {
  response.send('test!!!!!')
}

app.get(path, handler)

// Register a route on the homepage
app.get('/', (request, response) => response.send('welcome!'))

app.get('/contact', function (request, response) {
  response.send('my phone number is 06 34 002 444')
})