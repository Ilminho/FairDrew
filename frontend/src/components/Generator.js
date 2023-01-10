import {useState, useEffect} from "react"
import Table from "./Table"
import Persons from "./Persons"
import SearchDraw from "./SearchDraw"
import { pushPerson } from "../reducers/personReducer"
import {connect} from "react-redux"
import { removePerson } from "../reducers/personReducer"
import { useDispatch } from "react-redux"
import "../App.css"
import ExistingDraw from "./ExistingDraw"


const Generator = (props)=>{

    const [name, setName]=useState("")
    const [winner, setWinner]=useState("")

    const dispatch = useDispatch()

    const changeName = (e)=>{
        setName(e.target.value)
    }

    const drawRandom = ()=>{
        if(props.persons.length<1){
            setWinner("No participants")
            return;
        }
        const winningPerson=Math.floor(Math.random()*props.persons.length)
        setWinner(props.persons[winningPerson].name)

    }

    const submitName = ()=>{
        if(name==="")
            return;
        const id = props.persons.length
        
        dispatch(pushPerson({name:name, percentage:0, id:id}))
        console.log("Persons");
        setName("")
    }

    const onEnter = (e)=>{
        if(e.keyCode===13){
            submitName()
        }
    }    

    //quick draw

    if(props.generator===0){
        return(
            <div className="Generator">
                <div className="AddName">
                    <input type="text" onChange={changeName} 
                    onKeyDown={onEnter}
                    value={name}
                    ></input>
                    <button onClick={submitName} > Add a new name</button>
                </div>
    
    
    
    
                <div>
                    {props.persons===undefined?null:
                    <Table table={props.persons}/>
                    }
    
                    
                    
                </div>
    
                <div className="drewButton">
                    <button onClick={drawRandom}>Draw a random person</button>
                    Person is: {winner}
                </div>
                
            </div>
        )
    } 

    //customize quick draw

    if(props.generator===1){
        return(
            <div>Customize quick draw</div>
        )
    }

    return(
        <>
        <SearchDraw/>
        <ExistingDraw/>
        </>
    )


}

const mapStateProps=(state)=>{
    return{
        persons:state.persons,
        generator:state.generator
    }
}

const dispatchProps={
    removePerson
}

const GeneratorConnection = connect(mapStateProps,dispatchProps)(Generator)

export default GeneratorConnection