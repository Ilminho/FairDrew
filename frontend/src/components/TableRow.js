import Persons from "./Persons"
import { useDispatch } from 'react-redux'
import { removePerson } from "../reducers/personReducer"
import { removeDBPerson } from "../reducers/dbPersonReducer"
import {connect} from "react-redux"


const TableRow = (props)=>{

    const dispatch = useDispatch()

    const deletePerson = (e)=>{
        e.preventDefault()
        {
            typeof props.person==='object'?
            dispatch(removePerson(props.person.id)):
            dispatch(removeDBPerson(props.dbpersons.hash, props.person,""))
        }
        
        

    }

    return(
        <tr>
            <th>{typeof props.person==='object'?props.person.name:props.person}</th>
            <th><button onClick={deletePerson}>Delete person</button></th>
        </tr>
    )
}

const mapStateProps=(state)=>{
    return{
        dbpersons:state.dbpersons
    }
}

const dispatchProps={
    removePerson,
    removeDBPerson
}

const TableRowConnection = connect(mapStateProps,dispatchProps)(TableRow)

export default TableRowConnection
