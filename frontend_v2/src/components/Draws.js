import "../App.css"
import Menu from "./Menu"
import { useState } from "react"
import CreateDraw from "./CreateDraw"
import SearchDraw from "./SearchDraw"
import QuickDraw from "./QuickDraw"
import { useDispatch } from 'react-redux'
import {connect} from "react-redux"
import { numberSetter } from '../reducers/cardReducer';
import HamburgerButton from "./HamburgerButton"



const Draws = (props)=>{

    const [menu, setMenu] = useState(false);

    const changeMenu = ()=>{
        setMenu(!menu)
    }

    const menuFalse = (e)=>{
        e.target.className==="MenuButton"||e.target.tagName==="H4"?console.log():setMenu(false)
    }

    return(
        <div className="DrawCard" onClick={(e)=>menuFalse(e)}>
            <HamburgerButton/>
            <button className="MenuButton" onClick={changeMenu}>{menu?"Sulje valikko":"Avaa valikko"}</button>
            <div className="DrawLine"></div>
            {menu?<Menu className="Headers"/>:<></>}
            <div className="DrawBlur" style={{filter:menu?'blur(1px)':'blur(0px)'}}>
            {props.card===1?<QuickDraw/>:props.card===2?<SearchDraw/>:<CreateDraw/>}
            </div>
        </div>
    )
} 

const mapStateProps = (state)=>{
    return{
      card:state.card.card
    }
}
  
const dispatchProps = {
  numberSetter
}

const ConnectDraws = connect(mapStateProps, dispatchProps)(Draws)

export default ConnectDraws

