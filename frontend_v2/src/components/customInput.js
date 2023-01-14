import {useState} from "react"

const CustomInput = (props)=>{

    const [value,setValue] = useState("")

    const enterValue = (e)=>{
        if(e.keyCode===13){
            console.log("enter");
            props.doEnter?props.doEnter():console.log("No DoEnter");
            setValue("")
        }
    }

    const onChangeValue=(e)=>(
        setValue(e.target.value)
    )

    return(
        <div>
            <input onKeyDown={enterValue} placeholder={props.placeholder?props.placeholder:"No placeholder"} value={value} onChange={onChangeValue}></input>
        </div>
    )

}

export default CustomInput