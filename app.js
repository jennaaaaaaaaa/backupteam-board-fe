const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())

//home page
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/html/home.html') //검색 express sendFile
})

//게시글 조회 페이지(특정게시글)
app.get('/post', (req,res) => {
    res.sendFile(__dirname + '/html/post.html') //검색 express sendFile
})

//유저 정보
app.get('/profile', (req,res) => {

    res.sendFile(__dirname + '/html/profile.html')
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/html/login.html')
})

app.listen(9001, () => {
    console.log('9001 server start')
})