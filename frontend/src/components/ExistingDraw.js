import {useState, useEffect} from "react"
import Table from "./Table"
import Persons from "./Persons"
import SearchDraw from "./SearchDraw"
import { pushPerson } from "../reducers/personReducer"
import {connect} from "react-redux"
import { removePerson } from "../reducers/personReducer"
import { useDispatch } from "react-redux"
import TableRowConnection from "./TableRow"

const AddPeople = ()=>{
    const [person, setPerson] = useState("")

    const changePerson = (e)=>{
        setPerson(e.target.value)
    }

    const onEnter = (e)=>{
        if(e.keyCode===13){
            console.log("Adding " + person);
        }
    }

    return (
        <div>
            <input placeholder="Add person" onKeyDown={onEnter} onChange={changePerson}></input>
        </div>
    )

}

const ExistingDraw = (props)=>{

    const [pw, setPW] = useState("")

    const changePW = (e)=>{
        setPW(e.target.value)
        localStorage.setItem("pw",e.target.value)
        console.log(localStorage.getItem("pw"));

    }

    return (
        <div>
            
            <div className="Table">

            {props.needPassword?<input placeholder="Insert password" onChange={changePW}></input>:<></>}
            <AddPeople/>


                <table>
                    <thead>
                    <tr>
                        <th>Name: {props.dbpersons.name?props.dbpersons.name:<></>}</th>
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
    
    const personsToMap = ((people, name)=>({people,name}))(state.persons)
    const needPassword = state.dbpersons.password

    return{
        persons:personsToMap,
        generator:state.generator,
        dbpersons: state.dbpersons,
        needPassword:needPassword
    }
}

const dispatchProps={
    removePerson
}

const ExistingDrawConnection = connect(mapStateProps,dispatchProps)(ExistingDraw)

export default ExistingDrawConnection