import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
    return(
        props.colaboradores.length > 0 ? 
            <section className='time' style={{backgroundColor: props.corSegundaricaTime}}>
                <input value={props.corPrimariaTime} onChange={evt => props.mudarCor(evt.target.value, props.id)} type='color' className='inputColor'/>
                <h3 style={{borderColor:props.corPrimariaTime}}>{props.nome}</h3>
                <div className='container-colaborador'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador
                        key = {colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        id={colaborador.id}
                        favorito={colaborador.favorito}
                        corPrimariaTime = {props.corPrimariaTime}
                        aoDeletar = {props.aoDeletar}
                        aofavoritar = {props.aofavoritar}
                    />)}
                </div>
            </section>
        :''
    )
}

export default Time