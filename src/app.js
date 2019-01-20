const express = require('express')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    'message': 'hi',
  })
})

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use('/', router)

// Export your express server so you can import it in the lambda function.
module.exports = app
