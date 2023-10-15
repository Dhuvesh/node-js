const fs = require('fs')

const index = fs.readFileSync('index.html','utf-8')

const express =require('express')
const server = express();

server.listen(8080,()=>{
    console.log("server started");
})
server.get('/',(req, res)=>{
    res.send('<h1>hello</h1>')
})
