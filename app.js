const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// where routes live
const contentRoutes = require('./src/routes/content.js')

const tagRoutes = require('./src/routes/tags.js')

const userRoutes = require('./src/routes/users.js')

// if you go to localhost:3000/content use contentRoutes
app.use('/content', contentRoutes)

app.use('/tags', tagRoutes)

app.use('/users', userRoutes)

// anywhere else respond with error
app.all('*', (req, res, next) => res.sendStatus(404))

// if there's an error use this 
app.use((err, req, res) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Chirpy is working on ${port}!`)
  })
}

module.exports = app