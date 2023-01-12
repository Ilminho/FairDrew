
import { connect } from "react-redux"
import "../App.css"
import GeneratorConnection from "./Generator"
import MenuConnection from "./Menu"
import CreateDrawConnection from "./CreateDraw"

const GeneratorCard = (props)=>{

    return(
        <div className="generatorCard">
            GeneratorCard
            <MenuConnection/>
            <GeneratorConnection/>
        </div>
    )
}

const mapStateProps=(state)=>{
    return{
        persons:state.persons,
        generator:state.generator
    }
}

const dispatchProps={
    
}

const GeneratorCardConnection = connect(mapStateProps,dispatchProps)(GeneratorCard)

export default GeneratorCardConnection