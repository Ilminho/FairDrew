import "../App.css"
import { useState } from "react"

const SearchDraw = ()=>{

    const arvontaDB = [{
        name:"Ilkan arvonta",
        persons:["Ilkka","Jason","Joonas"],
        arvonnat:[{arvottu:"12.07.1995", voittaja:"Ilkka"}],
        modify:true,
        salasana: "1234",
        koodi:"1234"
    }]

    const [arvonta, setArvonta] = useState({})
    const [haku, setHaku] = useState("")

    const hakuOnChange = (e)=>{
        setHaku(e.target.value)
        console.log(haku);
    }

    const searchFromDB=(e)=>{
        if(e.key!=="Enter")
            return
        let haettuArvonta = arvontaDB.find(a=>a.koodi===haku)
        haettuArvonta?setArvonta(haettuArvonta):console.log("Ei löytynyt");

    }


    return(
        <div className="SearchDraw">
            <div>
                <input placeholder="Hae koodilla" onChange={(e)=>hakuOnChange(e)} onKeyDown={(e)=>searchFromDB(e)}></input>
            </div>
            <div className="HaettuArvonta">
                <p> Nimi: {arvonta.name?arvonta.name:""}</p>
                <p> Henkilöt: {arvonta.persons?arvonta.persons:""}</p>
                <p> Koodi: {arvonta.koodi?arvonta.koodi:""}</p>
            </div>
        </div>
    )
}

export default SearchDraw