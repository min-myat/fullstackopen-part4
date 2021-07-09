const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const blogsRouter = require('./controllers/blogs')

const logger = require('./utils/logger')
const config = require('./utils/config')

require('dotenv').config()

app.use(cors())
app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

app.use('/api/blogs', blogsRouter)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
