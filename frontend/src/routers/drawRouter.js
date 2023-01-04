import axios from "axios"
const baseUrl = "http://localhost:3001/"

const getDrewWithHash =(hash)=>{
    let data = axios.get(baseUrl+hash)
    return data.then(res=>res.data)
}

const modifyDrewWithHash = async (hash)=>{
    let data = await getDrewWithHash(hash)
    return data


}


export default {getDrewWithHash, modifyDrewWithHash}