const bcrypt = require('bcrypt')
const crypto = require('crypto')
const Drew = require("../models/Drew")

const checkPassword = async (password, personsToUpdate)=>{
    if(!personsToUpdate.password)
        return true

    if(!password){
        return false
    }



    const passwordCorrect = await bcrypt.compare(String(password), String(personsToUpdate.password))

    return passwordCorrect
}

const generate12StringHash = () =>{
    return crypto.randomBytes(5).toString('hex')
}

module.exports = {checkPassword, generate12StringHash}