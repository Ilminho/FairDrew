
const randomDrew = (arrayOfStrings)=>{
    if(arrayOfStrings.length<1){
        return "No participants"
    }

    const winner = arrayOfStrings[Math.floor(Math.random()*arrayOfStrings.length)]

    return winner
    
}

module.exports = {randomDrew}