import RedesSocial from '../RedesSocial'
import './RodaPe.css'

const RodaPe = ()=>{
    return (
        <footer className='roda-pe'>
            <div>
                <ul>
                    <RedesSocial imagem='./imagem/fb.png'/>
                    <RedesSocial imagem='./imagem/tw.png'/>
                    <RedesSocial imagem='./imagem/ig.png'/>
                </ul>
            </div>
            <div>
                <img src='./imagem/logo.png' alt='logo do reda-pe' />
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default RodaPe