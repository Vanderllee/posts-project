const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')


dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('Connected to MongoDB...')).catch((error) => console.log(error));

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.listen('5000', () => {
    console.log('Backend is running...')
})