import "../App.css"
import CustomInput from "./customInput"
import { useState } from "react"

const QuickDraw = ()=>{

    const [names, setNames] = useState([])
    const [arvottu, setArvottu] = useState(-2)

    const submitName = (name)=>{
        setNames(names.concat({name:name, key:names.length}))
        setArvottu(-1)
    }

    const randomFromNames = ()=>{
        if(names.length<1)
            return
        
        setArvottu(Math.floor(Math.random()*(names.length)))
    }

    const filterName = (key)=>{
        names.length===1?setArvottu(-2):console.log("");
        setNames(names.filter(name=>name.key!==key))
    }


    return(
        <div className="QuickDraw">
                <CustomInput placeholder="Syötä nimi ja paina enter" doEnter={submitName} class="QuickNimiInput"/>

            <div className="QuickTable">
                <table>
                    <thead>
                    <tr>
                        <th>
                            Henkilöt
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {names.map(name=><tr key={name.key}>
                            <td>{name.name + " "}<button className="deleteButton" onClick={()=>filterName(name.key)}>Poista</button></td>
                        </tr>)}
                    </tbody>

                </table>
            </div>
            <div className="Arvonta">
                            <button onClick={()=>randomFromNames()}>Suorita arvonta</button>
                            <h3> {arvottu===-2?"Listassa ei nimiä":arvottu>-1?names[arvottu].name:"Arvontaa ei ole suoritettu"}</h3>
            </div>
        </div>
    )
}

export default QuickDraw