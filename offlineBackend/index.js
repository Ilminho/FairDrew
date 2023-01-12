const http = require('http')
const cors = require('cors')

const express = require('express')
const { send } = require('process')
const app = express()

let jtn = {hash:"1234",name:"Testi", people:["ilkka","eelis"], auth:"authToken", password:"1234"}


app.use(cors())
app.use(express.json())

app.get("/offline", (req,res)=>{
    
    const toSend = {name:jtn.name, people:jtn.people}
    res.send(toSend)

    console.log("offlinetesti");
})

app.post("/passwordChecker", (req,res)=>{
    const password = req.body.password
    const hash = req.body.hash


    if(!password||!hash){
        res.send("Error no password or name")
        return
    }

    const jtn2 = {hash:"1234", password:"1234"}

    if(password===jtn2.password&&hash===jtn2.hash){
        res.send({auth:"authToken"})
    }

    res.status(404).send()
    

})

app.post("/offlineDelete", (req,res)=>{

    console.log(req.body.name);

    console.log(jtn.people[0]);
    console.log(req.body.people);
    console.log(jtn.people[0]===req.body.people);

    if(req.body.name===jtn.name){
        jtn.people = jtn.people.filter(n=>n!==req.body.people)
        const toSend = {name:jtn.name, people:jtn.people}
        res.send(toSend)
        return
    }

    res.send("/offline delete went wrong")
})


const server = http.createServer(app)

server.listen(3002,()=>{
    console.log("Kuunnellaan 3002");
})

