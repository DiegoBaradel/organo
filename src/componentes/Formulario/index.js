import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Botao from '../Botao';
import CampoTexto from '../campoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

const [nome,setNome]= useState('')
const [cargo,setCargo]= useState('')
const [imagem,setImagem]= useState('')
const [grupo,setGrupo]= useState('')

const aoSalvar = (evt) =>{
    evt.preventDefault()
    const id = uuidv4()
    const infColaborador = {
        id,
        nome,
        cargo,
        imagem,
        grupo
    }
    props.adicionarColaborador(infColaborador)
    
    setNome('')
    setCargo('')
    setImagem('')
    setGrupo('')
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label='nome' 
                    placeholder='digite seu nome'
                    valor={nome}
                    aoAlterado={valor =>{setNome(valor)}}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='cargo' 
                    placeholder='digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor =>{setCargo(valor)}}
                />
                <CampoTexto 
                    label='imagem' 
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor =>{setImagem(valor)}} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.time}
                    valor={grupo}
                    aoAlterado={valor =>{setGrupo(valor)}}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;