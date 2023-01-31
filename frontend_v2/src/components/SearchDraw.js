import "../App.css"
import { useState } from "react"

const SearchDraw = ()=>{

    const arvontaDB = [{
        name:"Ilkan arvonta",
        persons:["Ilkka","Jason","Joonas"],
        arvonnat:[{arvottu:"12.07.1995", voittaja:"Ilkka",osallistujat:["Ilkka","Jason"]}],
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
                <input placeholder="Hae koodilla" onChange={(e)=>hakuOnChange(e)} onKeyDown={(e)=>searchFromDB(e)}></input> <br/>
                {arvonta.modify?arvonta.salasana?<input placeholder="Syötä salasana"></input>:"":<></>}
            </div>
            <div className="HaettuArvonta">
                <p> Nimi: {arvonta.name?arvonta.name:""}</p>
                <div className="QuickTable">
                    {arvonta.persons?
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
            </div>
        </div>
    )
}

export default SearchDraw