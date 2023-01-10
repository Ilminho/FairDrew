import axios from "axios"
const baseUrl = "http://localhost:3001/"
const testiUrl = "http://localhost:3002/offline"

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


export default {getDrewWithHash, modifyDrewWithHash, getTestData}