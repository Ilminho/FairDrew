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

    const selected = (number)=>{
        if(number===props.generator)
            return "MenuButtonSelected"

        return "MenuButton"    
    }


    

    return(
        <div className="menuConnection">
            <div onClick={()=>setSetting(0)} className={selected(0)}>Quick draw</div>
            <div onClick={()=>setSetting(1)} className={selected(1)}>Customize quick draw</div>
            <div onClick={()=>setSetting(2)} className={selected(2)}>Existing draw</div>        
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