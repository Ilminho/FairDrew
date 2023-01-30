import "../App.css"
import CustomInput from "./customInput"
import { useState } from "react"


const CreateDraw = ()=>{

    const [password, setPassword] = useState("")
    const [modify, setModify] = useState(false)
    const [name, setName] = useState("")
    const [persons, setPersons] = useState([])
    const [color, setColor] = useState('black')
    const [form, setForm] = useState({})

    const changePassword = (e)=>{
        setPassword(e.target.value)
    }


    const changeName = (e)=>{
        e.target.value===""?setColor("red"):setColor("black")
        setName(e.target.value)
    }

    const changePersons = (person)=>{
        persons.filter(p=>p===person).length>0?console.log("Ei voi lisätä"):setPersons(persons.concat(person))
    }

    const changeModify = ()=>{
        setModify(!modify)
    }

    const blackRedBlack = ()=>{

    }

 

    const createArvonta = ()=>{
        let gucci = false

        name===""?gucci=false:gucci=true

        if(!gucci)
            return
        
        const formToAdd = {name:name, password:password, persons:persons, allowModify:modify}
        setForm(formToAdd)
        
        console.log(formToAdd);
    }


    return(
        <div className="CreateDraw">
            <div className="CreateTiedot">
                <input style={{borderBottom: "1px solid " +color}} placeholder="Arvonnan nimi *" onChange={(e)=>changeName(e)}></input> <br/>
                <input placeholder="Salasana" onChange={(e)=>changePassword(e)}></input> <br/>
                <CustomInput placeholder="Lisää henkilö" doEnter={(name)=>changePersons(name)}/>
                <button onClick={changeModify}>Salli muokkaus: {modify?"Kyllä":"Ei"}</button>
            </div>
            <div className="FormTiedot">
                <p>Henkilöt: {persons}</p>
            </div>
            <div className="FormButton">
                <button onClick={createArvonta}>Luo arvonta</button>
            </div>
            <div className="LuotuArvonta">
                {form.name===undefined?"Ei luotua arvontaa":
                    <>
                    <p> Arvonta {form.name} luotu</p>
                    <p> Hakukoodi: fa8r3iK33</p>
                    </>
                }
            </div>
        </div>
    )
}

export default CreateDraw