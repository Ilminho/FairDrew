const bcrypt = require('bcrypt')
const drewDateRouter = require("express").Router()
const checkPassword = require('../utils/drewRouteUtils').checkPassword
const Drew = require("../models/Drew")
const DrewDate = require("../models/DateDrew")
const randomDrew = require("../utils/randomDrew").randomDrew

drewDateRouter.post("/drewDate", async (req,res)=>{

    const {hash, password} = req.body

    const personsToUpdate=await Drew.findOne({hash:hash},'people password')

    if(await checkPassword(password,personsToUpdate)===false){
            res.status(400).send("Error with password or hash")
            return
    }

    const winner = randomDrew(personsToUpdate.people)
    const date = new Date()

    const drewToAdd = {winner:winner, drewDate: date, people:personsToUpdate.people}

    const drewDate = await new DrewDate(drewToAdd)

    const result = await drewDate.save()

    res.send(result)


})

drewDateRouter.delete("/drewDate", async (req,res)=>{
    const result = await DrewDate.deleteMany({})

    res.send(result)
})

drewDateRouter.get("/drewDate/:id", async (req,res)=>{
    const hash = req.params.id
    const result = await DrewDate.find({hash:hash})

    res.send(result)

})

module.exports = drewDateRouter