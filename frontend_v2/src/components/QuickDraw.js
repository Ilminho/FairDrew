import "../App.css"
import CustomInput from "./customInput"
import { useState } from "react"

const QuickDraw = ()=>{

    const [names, setNames] = useState([])

    const submitName = (name)=>{
        setNames(names.concat({name:name, key:names.length}))
    }

    const filterName = (key)=>{
        setNames(names.filter(name=>name.key!==key))
        console.log("Filtteröi");
    }

    return(
        <div className="QuickDraw">
            <div>
                <CustomInput placeholder="Syötä nimi ja paina enter" doEnter={submitName} class="QuickNimiInput"/>
            </div>
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
                            <th>{name.name + " "}<button className="deleteButton" onClick={()=>filterName(name.key)}>Poista</button></th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default QuickDraw