const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var bodyParser = require('body-parser')


const messageData = []


app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    const { name, message } = req.body

    const newMessage= {
      name,
      message
    }

    messageData.push(newMessage)
    res.status('200').json(messageData)

  })

  server.get('/api/guestbook', (req, res, next) => {
    const response = messageData
    
    res.json(
      response
    )
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
