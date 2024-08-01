import './CampoTexto.css'
const CampoTexto = (props)=>{

    const aoDigitar = (evt)=>{
        props.aoAlterado(evt.target.value)
    }

    return(
        <div className={`campo-${props.tipo}`}>
            <label>{props.label}</label>
            <input type={props.tipo} value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>

    )
    
}

export default CampoTexto;