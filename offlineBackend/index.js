const http = require('http')
const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors())

app.get("/offline", (req,res)=>{
    const jtn = {name:"Testi", people:["ilkka","eelis"]}
    res.send(jtn)

    console.log("offlinetesti");
})


const server = http.createServer(app)

server.listen(3002,()=>{
    console.log("Kuunnellaan 3002");
})

