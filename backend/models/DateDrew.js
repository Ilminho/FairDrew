const mongoose = require('mongoose')
const password = "mooctest" //change this

const drewDateSchema = mongoose.Schema({
    drewDate: Date,
    winner:String,
    people:[{type:String}],
    drew: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drew'        
    }

})

drewDateSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.id
        delete returnedObject.__v
      }
})

const mongoUrl = `mongodb+srv://Ilminho:${password}@cluster0.nfgcz.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongoUrl)
mongoose.set("strictQuery", true)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const DrewDate = mongoose.model("DrewDate", drewDateSchema)

module.exports = DrewDate