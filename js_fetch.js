const express = require('express')
const app = express()

app.get('/home', (req,res) => {
    res.send('home')
})

app.get('/login', (req,res) => {
    res.send('login')
})

app.get('/profile', (req,res) => {
    res.send('profile')
})

app.listen(3001, () => {
    console.log('server start')
})