import Persons from "./Persons"
import { useDispatch } from 'react-redux'
import { removePerson } from "../reducers/personReducer"
import {connect} from "react-redux"


const TableRow = (props)=>{

    const dispatch = useDispatch()

    const deletePerson = (e)=>{
        e.preventDefault()
        dispatch(removePerson(props.person.id))
    }

    return(
        <tr>
            <th>{props.person.name}</th>
            <th><button onClick={deletePerson}>Delete person</button></th>
        </tr>
    )
}

const dispatchProps={
    removePerson
}

const TableRowConnection = connect(null,dispatchProps)(TableRow)

export default TableRowConnection
