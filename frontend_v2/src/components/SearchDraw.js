import "../App.css"
import { useState } from "react"
import CustomInput from "./customInput"
import Arvonta from "./Arvonta"

const SearchDraw = ()=>{

    const arvontaDB = [{
        name:"Ilkan arvonta",
        persons:["Ilkka","Jason","Joonas","Jani","Sorjonen","Mamma"],
        arvonnat:[{arvottu:"12.07.1995", voittaja:"Ilkka",osallistujat:["Ilkka","Jason"]},{arvottu:"12.07.1996", voittaja:"Hönz",osallistujat:["Ilkka","Hönz","Jason"]}],
        modify:true,
        salasana: "1234",
        koodi:"1234"
    },
    {
        name:"Toinen arvonta",
        persons:["Joonas","Jani","Nic"],
        arvonnat:[{arvottu:"1.1.2023", voittaja:"Joonas", osallistujat: ["Joonas","Nic","Alisa"]}],
        modify:false,
        salasana:"1234",
        koodi:"432"
    }
]

    const [arvonta, setArvonta] = useState()
    const [haku, setHaku] = useState("")
    const [showArvonnat, setShowArvonnat] = useState(false)
    const [osallistujat, setOsallistujat] = useState(false)

    const changeOsallistujat = ()=>{
        setOsallistujat(!osallistujat)
    }

    const checkAndCloseOsallistujat=(e)=>{
        e?.target?.className!=="Osallistujat"?setOsallistujat(false):console.log();
    }

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

    const closeArvonnat = (e)=>{


        osallistujat?checkAndCloseOsallistujat(e):console.log();

        let ignore = ["Näytä arvonnat","Näytä osallistujat","ArvontaIkkuna","Osallistujat","Sulje"]
        let toReturn = false

        ignore.forEach((i)=>{
            i===e?.target?.innerText||i===e?.target?.className?
            toReturn=true:
            console.log();
        })

        if(toReturn){
            return
        }


        e?.target?.className==="ArvontaIkkuna"?
        console.log():
        setShowArvonnat(false)

    }

    return(
        <div className="SearchDraw" onClick={(e)=>closeArvonnat(e)}>
            <div>
                <input placeholder="Hae koodilla" onChange={(e)=>hakuOnChange(e)} onKeyDown={(e)=>searchFromDB(e)}></input> <br/>
                {arvonta?.modify?arvonta.salasana?<input placeholder="Syötä salasana"></input>:"":<></>}
                <CustomInput placeholder="Lisää nimi"/>
                <button>Arvo</button>
                {
                    arvonta?
                    <button onClick={()=>{setShowArvonnat(!showArvonnat)}}>Näytä arvonnat</button>:
                    <></>
                }

            </div>
            <div className="HaettuArvonta">
                <p> Nimi: {arvonta?.name?arvonta.name:""}</p>
                <div className="QuickTable">
                    {arvonta?.persons?
                                    <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            Henkilöt
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {arvonta.persons.map(name=><tr key={name}>
                                            <th>{name + " "}<button className="deleteButton" >Poista</button></th>
                                        </tr>)}
                                    </tbody>
                
                                </table>:""}

                </div>
                {
                    showArvonnat?
                    <Arvonta arvonta={arvonta?arvonta:arvonta} sulje={closeArvonnat} osallistujat={osallistujat} setOsallistujat={changeOsallistujat} closeOsallistujat={checkAndCloseOsallistujat}/>:
                    <></>
                }
            </div>
        </div>
    )
}

export default SearchDraw