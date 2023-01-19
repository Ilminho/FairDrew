import "../App.css"
import Menu from "./Header"
import { useState } from "react"

const Draws = ()=>{

    const [menu, setMenu] = useState(false);

    const changeMenu = ()=>{
        setMenu(!menu)
    }

    return(
        <div className="DrawCard">
            <button className="MenuButton" onClick={changeMenu}>{menu?"Close Menu":"Open Menu"}</button>
            {menu?<Menu className="Headers"/>:<></>}
            
        </div>
    )
} 

export default Draws