const express = require('express');
const http = require('http')
const app = express(); 

app.get('/',(req, res) => {
    return res.send(`Welcome to Hone Page ${req.query.name}`)
})

app.get('/about',(req,res)=>{
    return res.send('About page here..'+ 'name here:'+req.query.name +  'and age:'+ req.query.age)
})

app.listen(3000,()=>console.log("WOW Server Start Hogaya..."))
// const myServer = http.createServer(app)

// myServer.listen(4000,()=>console.log("WOW Server Start Hogaya..."))

