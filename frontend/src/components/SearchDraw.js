import { connect } from "react-redux"
import { hashSetter } from "../reducers/hashReducer"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { initializeDBPersons } from "../reducers/dbPersonReducer"

const SearchDraw = ()=>{

    const dispatch = useDispatch()
    const [hash, setHash]=useState("")
    const hashValue = (e)=>{
        setHash(e.target.value)
    }

    const enterNewHash = (e)=>{
        if(e.keyCode===13){

            console.log("jee");
            dispatch(hashSetter(hash))
            dispatch(initializeDBPersons(hash))
            setHash("")
        }
    }

    return(
        <div>
            <input placeholder="Search by name or hash" onChange={hashValue}
            value={hash} onKeyDown={enterNewHash}
            />
        </div>
    )
}


const mapStateProps = (state)=>{
    return{
      hash:state.hash

    }
  }
  
  const dispatchProps = {
    hashSetter,
    initializeDBPersons
  }
  
  const ConnectSearchDraw = connect(mapStateProps, dispatchProps)(SearchDraw)
  
export default ConnectSearchDraw
