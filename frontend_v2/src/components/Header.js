import "../App.css"

const Menu = ()=>{

    const clickHeader = (which)=>{

        console.log(which);
    }



    return(
        <div className="Header">
            <h4 onClick={()=>clickHeader("Quick")}>Quick draw</h4>
            <h4 onClick={()=>clickHeader("Existing")}>Existing draw</h4>
            <h4 onClick={()=>clickHeader("Create")}>Create a draw</h4>
        </div>
    )
}

//<button className="closeButton"> X</button>
export default Menu