import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
    return(
        props.colaboradores.length > 0 ? 
            <section className='time' style={{backgroundColor: props.corSegundaricaTime}}>
                <h3 style={{borderColor:props.corPrimariaTime}}>{props.nome}</h3>
                <div className='container-colaborador'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador
                        key = {colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimariaTime = {props.corPrimariaTime}
                    />)}
                </div>
            </section>
        :''
    )
}

export default Time