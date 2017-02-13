const
  express = require('express'),
  bodyParser = require('body-parser'),
  routes = require('./routes/routes'),
  mongoose = require('mongoose'),
  app = express()

mongoose.Promise = global.Promise

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber')
}

app.use(bodyParser.json())

routes(app)

app.use((err, req, res, next) => {
  if (err)
    res.status(422).send({ error: err.message })

  next()
})

module.exports = app