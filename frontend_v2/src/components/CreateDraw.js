import "../App.css"
import CustomInput from "./customInput"
import { useState } from "react"


const CreateDraw = ()=>{

    const [password, setPassword] = useState("")
    const [modify, setModify] = useState(false)
    const [name, setName] = useState("")
    const [persons, setPersons] = useState([])

    const changePassword = (e)=>{
        setPassword(e.target.value)
    }


    const changeName = (e)=>{
        setName(e.target.value)
    }

    const changePersons = (person)=>{
        setPersons(persons.concat(person))
    }

    const changeModify = ()=>{
        setModify(!modify)
    }

 

    const createArvonta = ()=>{
        const formToAdd = {name:name, password:password, persons:persons, allowModify:modify}
        console.log(formToAdd);
    }


    return(
        <div className="CreateDraw">
            <div>
                <input placeholder="Arvonnan nimi" onChange={(e)=>changeName(e)}></input>
                <input placeholder="Salasana" onChange={(e)=>changePassword(e)}></input>
                <CustomInput placeholder="Lisää henkilö" doEnter={(name)=>changePersons(name)}/>
                <button onClick={changeModify}>Salli muokkaus: {modify?"Kyllä":"Ei"}</button>
            </div>
            <div className="FormTiedot">
                <p>Henkilöt: {persons}</p>
            </div>
            <div>
                <button onClick={createArvonta}>Luo arvonta</button>
            </div>
        </div>
    )
}

export default CreateDraw