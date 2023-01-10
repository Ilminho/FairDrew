import {useState, useEffect} from "react"
import Table from "./Table"
import Persons from "./Persons"
import SearchDraw from "./SearchDraw"
import { pushPerson } from "../reducers/personReducer"
import {connect} from "react-redux"
import { removePerson } from "../reducers/personReducer"
import { useDispatch } from "react-redux"
import TableRowConnection from "./TableRow"

const ExistingDraw = (props)=>{
    return (
        <div>
            <div className="Table">
                <table>
                    <thead>
                    <tr>
                        <th>Name: {props.dbpersons.name?<></>:props.dbpersons.name}</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {props.dbpersons.people.map(e=><TableRowConnection key={e} person={e}/>)}
                    </tbody>     
                </table>
            </div>
        </div>
    )
}

const mapStateProps=(state)=>{
    return{
        persons:state.persons,
        generator:state.generator,
        dbpersons: state.dbpersons
    }
}

const dispatchProps={
    removePerson
}

const ExistingDrawConnection = connect(mapStateProps,dispatchProps)(ExistingDraw)

export default ExistingDrawConnection