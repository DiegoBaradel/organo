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
const [nomeTime,setNomeTime]= useState('')
const [corTime,setCorTime]= useState('')

const aoSalvar = (evt) =>{
    evt.preventDefault()
    const id = uuidv4()
    let favorito
    const infColaborador = {
        favorito,
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
                    tipo = 'text'
                    label='nome' 
                    placeholder='digite seu nome'
                    valor={nome}
                    aoAlterado={valor =>{setNome(valor)}}
                />
                <CampoTexto 
                    obrigatorio={true}
                    tipo = 'text' 
                    label='cargo' 
                    placeholder='digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor =>{setCargo(valor)}}
                />
                <CampoTexto
                tipo = 'text' 
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
            <form onSubmit={(evt)=>{
                    evt.preventDefault()
                    props.aoSalvarNovoTime(nomeTime,corTime)}}>
                <h2>Preencha os dados para criar um time novo.</h2>
                <CampoTexto
                    obrigatorio={true}
                    tipo = 'text' 
                    label='novo time' 
                    placeholder='digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor =>{setNomeTime(valor)}}
                />
                <CampoTexto 
                    obrigatorio={true}
                    tipo = 'color' 
                    label='cor'
                    placeholder='digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor =>{setCorTime(valor)}}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;