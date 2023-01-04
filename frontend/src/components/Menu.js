import { useState } from "react"
import { connect } from "react-redux"
import { changeSetting } from "../reducers/generatorReducer"
import { useDispatch } from "react-redux"
import "../App.css"

const Menu = (props)=>{

    const dispatch = useDispatch()

    const setSetting = (e)=>{

        dispatch(changeSetting(e))
    }
    

    return(
        <div className="menuConnection">
            <div onClick={()=>setSetting(0)} className="MenuButton">Quick draw</div>
            <div onClick={()=>setSetting(1)} className="MenuButton">Customize quick draw</div>
            <div onClick={()=>setSetting(2)} className="MenuButton">Existing draw</div>        
        </div>
    )
}


const mapStateProps=(state)=>{
    return{
        generator:state.generator
    }
}


const dispatchProps={
    changeSetting
}
const MenuConnection = connect(mapStateProps,dispatchProps)(Menu)

export default MenuConnection