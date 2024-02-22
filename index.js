require('dotenv').config()
const express = require('express')
const app = express()
port = 4000


app.get('/',(req, res)=>{
    res.send('hello world')
})

app.get('/login', (req, res)=>{
    res.send('this is a response page')
})

app.listen(process.env.PORT, ()=>{
    console.log(`you are currently actiive at port: ${port}`)
})