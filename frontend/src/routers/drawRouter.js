import axios from "axios"
const baseUrl = "http://localhost:3001/"
const testiUrl = "http://localhost:3002/offline"
const passwordTest = "http://localhost:3002/passwordChecker" 
const deleteTest = "http://localhost:3002/offlineDelete"


const getDrewWithHash = async(hash)=>{
    let data = await axios.get(baseUrl+"get/"+hash)
    return data.data
}

const modifyDrewWithHash = async (hash)=>{
    let data = await getDrewWithHash(hash)
    return data.data[0]
}

const addWithHash = async (hash, person, password)=>{
    const dataToSend = {hash:hash, person:person, password:password}

    const response = await axios.put(baseUrl+"add/"+hash, dataToSend)

    console.log(response);

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

const deletePerson = async (hash, person, password)=>{
    !password?password="":password=password;
    let toDelete = {hash:hash, person:person, password:hash}
    let data = await axios.post(baseUrl+"deletePerson",toDelete)
    console.log(data.data);

    return data.data
}

const createDrew = async (drew)=>{
    let data = await axios.post(baseUrl+"new", drew)
    console.log(data)

    return data.data
}


export default {getDrewWithHash, modifyDrewWithHash, getTestData, deletePerson, createDrew}