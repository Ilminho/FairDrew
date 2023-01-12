import axios from "axios"
const baseUrl = "http://localhost:3001/"
const testiUrl = "http://localhost:3002/offline"
const passwordTest = "http://localhost:3002/passwordChecker" 
const deleteTest = "http://localhost:3002/offlineDelete"


const getDrewWithHash =(hash)=>{
    let data = axios.get(baseUrl+hash)
    return data.then(res=>res.data)
}

const modifyDrewWithHash = async (hash)=>{
    let data = await getDrewWithHash(hash)
    return data.data[0]
}

const getTestData = async()=>{
    let data = await axios.get(testiUrl)
    console.log(data.data);
    return data.data
}

const checkPassword = async (password, name)=>{
    let sendData = {password:password, name:name}
    let data = await axios.post(passwordTest,sendData)
}

const deletePerson = async (name, people)=>{
    let toDelete = {name:name, people:people}
    let data = await axios.post(deleteTest,toDelete)
    console.log(data.data);

    return data.data
}

const createDrew = async (drew)=>{
    let data = await axios.post(baseUrl+"new", drew)
    console.log(data)

    return data.data
}


export default {getDrewWithHash, modifyDrewWithHash, getTestData, deletePerson, createDrew}