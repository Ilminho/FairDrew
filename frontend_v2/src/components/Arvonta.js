import { useState } from "react"

const Arvonta =  (props)=>{

    const [showosallistujat, setShowosallistujat] = useState(false)
    const [osallistujat, setOsallistujat] = useState()


    const changeOsallistujat = (osallistujat)=>{

        setOsallistujat(osallistujat)
        setShowosallistujat(!showosallistujat)
    }

    return(
        <div className="ArvontaIkkuna">
            <table>
                <thead>
                    <tr>
                        <th>
                            Arvottu
                        </th>
                        <th>
                            Voittaja
                        </th>
                        <th>
                            Näytä henkilöt
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {props.arvonta?.arvonnat?
                        props.arvonta.arvonnat.map(arvonta =>
                        <tr key={arvonta.arvottu}>
                            <td>{arvonta.arvottu}</td>
                            <td>{arvonta.voittaja}</td>
                            <td>
                                <button onClick={()=>changeOsallistujat(arvonta.osallistujat)}>Näytä osallistujat</button>
                            </td>
                        </tr>)
                    :<></>}
                </tbody>

            </table>
                        

            {showosallistujat&&osallistujat?
                osallistujat.map(osallistuja=><p key={osallistuja+"2"}>{osallistuja}</p>)
                :<></>
            }


        </div>
    )   
}

export default Arvonta

/*
            <p>Järjestetty: {props.arvonta?.arvottu?props.arvonta.arvottu:"Ei järjestetty/Vika"}</p>
            <p>Voittaja: {props.arvonta?.voittaja?props.arvonta.voittaja:"Ei voittajaa"}</p>
            <p>Osallistujat: </p>
            {
                props.arvonta?.osallistujat?
                props.arvonta.osallistujat.map(e=><p key={e+"1"}>{e}</p>):
                <>Ei osallistujia</>
            }

*/