import { useState } from "react"
import "../App.css"

const HamburgerButton = (props)=>{

    return(
        <div className="MenuButton">
            <div className={props.hambMenu?"changeHamb":"Hamb"} onClick={()=>{props.onClick()}}  >
                <div className="bar1"></div>
                <div  className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}

export default HamburgerButton