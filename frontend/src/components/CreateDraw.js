import "../App.css"
import { useState } from "react"
import { connect } from "react-redux"
import axios from "axios"

const CreateDraw = ()=>{

    const [names,setNames]=useState([])
    const [password, setPassword] = useState(false)
    const [drewname, setDrewname]=useState("")
    const [name,setName]=useState("")
    const [confrimPW, setConfirmPW]=useState("")
    const [pw, setPw]=useState("")
    const [editable, setEditable] = useState(false)

    const changePassword = ()=>{
        setPassword(!password)
        setPw("")
        setConfirmPW("")
    }

    const changeCPW=(e)=>{
        setConfirmPW(e.target.value)
        console.log(e.target.value);
    }
    const changePW=(e)=>{
        setPw(e.target.value)
        console.log(e.target.value);
    }

    const changeEditable = ()=>{
        setEditable(!editable)
    }

    const changeConfirmPassword = (e)=>{

    }

    const changeName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value)
    }

    const changeDrewname = (e)=>{
        setDrewname(e.target.value)
    }

    const buttonText = ()=>{
        return password?"No":"Yes"
    }

    const CreateNewDraw = async()=>{
        if(drewname==="")
            return
        if(pw!==confrimPW){
            console.log("pw and cpw doesnt match");
            return
        }
        const draw = {name:drewname, persons:names,password:pw, editable:true}
        console.log(draw);
        const response = await axios.post("http://localhost:3002/new",draw)
        console.log(response.data);
    } 
    

    const addToNames =(e)=>{
        console.log(names);
        e.preventDefault()

        if(names.filter(n=>n===name).length>0)
            return

        if(name==="")
            return
        const namesToAdd = names.concat(name)
        setNames(namesToAdd)
        setName("")
    }

    const deleteName = (nameToDelete)=>{
        let filteredNames=names.filter(n=>n!==nameToDelete)
        setNames(filteredNames)
    }


    return(
        <div>
                <input type="text" placeholder="Name of the draw" onChange={changeDrewname} value={drewname}></input>
                <br></br>
                <input type="text" placeholder="Add people" onChange={changeName} value={name}></input>
                <button onClick={addToNames}>Add person</button>

                <table className="CreateDrawTable">
                    <thead>
                        <tr>
                            <th colSpan="2">Names</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map(name=><tr key={name}><td>{name}</td><td><button onClick={()=>deleteName(name)}>Delete</button></td></tr>)}
                    </tbody>
                </table>
                Editable without password?
                <br></br>
                <button onClick={changePassword}>{buttonText()}</button>
                {password?
                    <>
                        <input type="text" placeholder="Insert password" onChange={changePW} value={pw}></input>
                        <input type="text" placeholder="Write password again" onChange={changeCPW} value={confrimPW}></input>

                    </>
                :<></>}
                <br></br>
                <button onClick={CreateNewDraw}>Create a draw</button>
        </div>
    )
}

const mapStateProps = (state)=>{
    return{

    }
}

const dispatchProps = {

}

const CreateDrawConnection = connect(mapStateProps,dispatchProps)(CreateDraw)

export default CreateDrawConnection


