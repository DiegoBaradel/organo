import './MostrarFormulario.css'
const MostrarFormulario = (props)=>{
    return(
        <div className='container-botao'>
            <h2>Minha Organização:</h2>
            <img onClick={() => props.mostrarEsconderFormulario()} src='./imagem/Botão add-01 1.svg' alt='botao para fechar e mostrar formulario'/>
        </div>
    )
}
export default MostrarFormulario