const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
require('./db/mongoose')
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')


const app = express()
const port = process.env.PORT || process.env.PORT_ENV


app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.listen(port , () => {
    console.log('Server is on up port ' + port)
})