const express = require('express')
const app = express()
const words = require('./routes/words')
const connectDB = require('./db/connection')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.json())


app.use('/api/v1/words', words)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`Server is running on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
const port = 5000

