const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const drewRouter = require("./routes/drewRouter")
const drewDateRouter = require("./routes/drewDateRouter")

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :response-time :total-time"))

app.get("/jtn", (req,res)=>{
    res.send("Ei")
})

app.use(drewRouter)
app.use(drewDateRouter)

module.exports = app