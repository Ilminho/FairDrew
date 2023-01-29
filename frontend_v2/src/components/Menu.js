import "../App.css"

import { useDispatch } from 'react-redux'
import {connect} from "react-redux"
import { numberSetter } from "../reducers/cardReducer"

const Menu = (props)=>{

    const dispatch = useDispatch()

    const clickHeader = (which)=>{

        console.log(which);
        dispatch(numberSetter(which))

    }



    return(
        <div className="Menu">
            <h4 onClick={()=>clickHeader(1)}>Quick draw </h4>
            <h4 onClick={()=>clickHeader(2)}>Existing draw</h4>
            <h4 onClick={()=>clickHeader(3)}>Create a draw</h4>
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

const ConnectMenu = connect(mapStateProps, dispatchProps)(Menu)

export default ConnectMenu

//<button className="closeButton"> X</button>
