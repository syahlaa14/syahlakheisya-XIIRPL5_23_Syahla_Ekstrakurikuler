const express = require('express')
const app = express()
const extrarouter = require('./router/ekstras')
const port = 2000
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(extrarouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})