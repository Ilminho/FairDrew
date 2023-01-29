import {useState} from "react"

const CustomInput = (props)=>{

    const [value,setValue] = useState("")

    const enterValue = (e)=>{
        if(e.keyCode===13){
            console.log(value);
            props.doEnter?props.doEnter(value):console.log("No DoEnter");
            setValue("")
        }
    }

    const onChangeValue=(e)=>(
        setValue(e.target.value)
    )

    return(
        <div>
            <input onKeyDown={enterValue} placeholder={props.placeholder?props.placeholder:"No placeholder"} value={value} onChange={onChangeValue} className={props.class}></input>
        </div>
    )

}

export default CustomInput