const mongoose = require('mongoose')
const password = "mooctest" //change this

const drewSchema = mongoose.Schema({
    name: {
        type:String,
        minlength:[3, "Too short name"],
        require:true
    },
    people:[{type:String}],
    password:String,
    hash:String,
    modifiable: Boolean,
    drewDates:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "DrewDate"
    }
})

drewSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.id
        delete returnedObject.__v
      }
})

const mongoUrl = `mongodb+srv://Ilminho:${password}@cluster0.nfgcz.mongodb.net/?retryWrites=true&w=majority`

try {
    mongoose.connect(mongoUrl)
} catch (error) {
    console.log("Mongoose error Drew.js");
}
mongoose.set("strictQuery", true)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const Drew = mongoose.model("Drew", drewSchema)

module.exports = Drew