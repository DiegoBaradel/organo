import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = (props) =>{
    return(
        <div className='colaborador'>
            < AiFillCloseCircle size={25} className='deletar' onClick={()=>props.aoDeletar(props.id)} />
            <div className='cabecalho'style={{backgroundColor:props.corPrimariaTime}}>
                <img src={props.imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            <div>
                {props.favorito
                    ?<AiFillHeart size={24} onClick={() => {props.aofavoritar(props.id)}} />
                    :<AiOutlineHeart size={24} onClick={() => {props.aofavoritar(props.id)}}/>
                }
            </div>
            </div>
        </div>
    )
}

export default Colaborador