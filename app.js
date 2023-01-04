const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/html/home.html') //검색 express sendFile
})

app.get('/profile', (req,res) => {

    res.sendFile(__dirname + '/html/profile.html')
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/html/login.html')
})

app.listen(9001, () => {
    console.log('server start')
})