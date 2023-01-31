const Arvonta =  (props)=>{
    return(
        <div ar>
            <p>Järjestetty: {props.arvonta.arvottu?props.arvonta.arvottu:"Ei järjestetty/Vika"}</p>
            <p>Voittaja: {props.arvonta.voittaja?props.arvonta.voittaja:"Ei voittajaa"}</p>
            {
                props.arvonta.osallistujat?
                props.arvonta.osallistujat.map(e=><p>{e}</p>):
                <>Ei osallistujia</>
            }
        </div>
    )
}

export default Arvonta