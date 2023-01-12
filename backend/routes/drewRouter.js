const bcrypt = require('bcrypt')
const drewRouter = require("express").Router()
const checkPassword = require('../utils/drewRouteUtils').checkPassword
const generate12StringHash = require('../utils/drewRouteUtils').generate12StringHash
const Drew = require("../models/Drew")



drewRouter.get("/all", async (req,res)=>{
    const allDrews = await Drew.find({})
    res.send(allDrews)
})

drewRouter.get("/:id", async (req,res)=>{
    console.log("post/id")
    const hash = req.params.id

    const specific = await Drew.find({'hash': hash}, 'name people')

    res.send(specific)
})

drewRouter.post("/new", async (req,res)=>{    
    const drewToAdd = req.body
    let hash = generate12StringHash()
    console.log("drewRouter");

    console.log(drewToAdd.password==="");

    if(drewToAdd.password!=undefined&&drewToAdd.password!==""){
        console.log("password:" + drewToAdd.password);
        console.log("DrewPassword");

        const saltrounds = 4

        const passwordHash = await bcrypt.hash(drewToAdd.password, saltrounds)
    
        drewToAdd.password = passwordHash
    }

    while(true){
        const isHashUsed = await Drew.find({hash:hash})
        if(isHashUsed.length<1){
            break;
        }
        console.log("rundaa");
        hash = generate12StringHash()   
    }

    drewToAdd.hash = hash
    const drew = await new Drew(drewToAdd)
    const result  = await drew.save()
    res.send(result)
})

drewRouter.delete("/delete", async (req,res)=>{
    const result = await Drew.deleteMany({})
    res.status(200).send(result)
})

drewRouter.put("/add/:id", async (req,res)=>{
    const hash = req.params.id
    const person = req.body.person
    let password=req.body.password //nullchecker on checkPasswordissa

    const personsToUpdate=await Drew.findOne({hash:hash},'people password')

    console.log(personsToUpdate);

    if(personsToUpdate===null){
        res.sendStatus(404)
        return;
    }

    if(await checkPassword(password,personsToUpdate)===false){
            res.status(400).send("Error with password or hash")
            return
    }

    const personsArray = personsToUpdate.people
    personsArray.push(person)

    const toUpdate = await Drew.findOneAndUpdate({hash: hash}, {people: personsArray},
        {returnOriginal:false})

    res.send(toUpdate)

})

drewRouter.get("/get/:hae", async (req,res)=>{
    const haku = req.params.hae
    let result = await Drew.findOne({'name': haku}, 'name people')
    if(!result){
        result = await Drew.findOne({'hash':haku}, 'name people')
    }

    if(!result){
        res.status(404).send("Something went wrong")
        return
    }

    res.send(result)

})

drewRouter.get("/get/testtest", (req,res)=>{
    const testiData = 0
})

module.exports = drewRouter