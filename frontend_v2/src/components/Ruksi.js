import { useState } from "react"


const Ruksi = (props)=>{

    const [style, setStyle] = useState("hambRuksi")

    const changeStyle = ()=>{
        style==="Hamb"?setStyle("change"):setStyle("Hamb")
    }

    const setClick = ()=>{
        props.onClick()
    }

    return(
        <div className={style} onClick={()=>setClick()}>
            <div className="bar1Ruksi"></div>
            <div className="bar3Ruksi"></div>
        </div>
    )
}

export default Ruksi