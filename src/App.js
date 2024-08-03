import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import RodaPe from './componentes/RodaPe';
import MostrarFormulario from './componentes/MostrarFormulario';

function App() {
  const [mostrarForm, setMostrarForm] = useState(true)

  const mostrarEsconderFormulario = ()=>{
    setMostrarForm (valor => valor = !valor)
  }

  const aoDeletarColaborador = (id)=>{
    console.log(id)
    setColaborador(colaborador.filter(item => item.id !== id))
  }
  const mudarCorTime =(cor, id)=>{
    setInfoTime(infoTime.map(time => {
      if (time.id === id) {
        time.corPrimariaTime = cor
        time.corSegundaricaTime = hexToRgba(cor, 0.6)
      }
      return time
    }))
  }
  const aoSalvarNovoTime =(time, cor)=>{
    setInfoTime([...infoTime,{id:uuidv4(), nomeTime:time, corPrimariaTime:cor, corSegundaricaTime: hexToRgba(cor, 0.6)}])
  }

  const [infoTime, setInfoTime]= useState([
    { id: uuidv4(),
      nomeTime:'Programação',
      corPrimariaTime:'#57C278',
      corSegundaricaTime:'#D9F7E9'
    },
    { id: uuidv4(),
      nomeTime:'Front-End',
      corPrimariaTime:'#82CFFA',
      corSegundaricaTime:'#E8F8FF'
    },
    { id: uuidv4(),
      nomeTime:'Data Science',
      corPrimariaTime:'#A6D157',
      corSegundaricaTime:'#F0F8E2'
    },
    { id: uuidv4(),
      nomeTime:'Devops',
      corPrimariaTime:'#E06B69',
      corSegundaricaTime:'#FDE7E8'
    },
    { id: uuidv4(),
      nomeTime:'UX e Design',
      corPrimariaTime:'#DB6EBF',
      corSegundaricaTime:'#FAE9F5'
    },
    { id: uuidv4(),
      nomeTime:'Mobile',
      corPrimariaTime:'#FFBA05',
      corSegundaricaTime:'#FFF5D9'
    },
    { id: uuidv4(),
      nomeTime:'Inovação e Gestão',
      corPrimariaTime:'#FF8A29',
      corSegundaricaTime:'#FFEEDF'
    },
  ])

  const [colaborador, setColaborador] = useState([])

   useEffect(()=>{
    fetch('http://localhost:8080/colaboradores')
      .then(res => res.json())
     .then(dados =>{
     setColaborador([...dados])
      })
   },[])
  
  const adicionarColaboradorLista = (novoColaborador)=>{
    console.log(novoColaborador)
    setColaborador([...colaborador, novoColaborador])
  }

  const aofavoritar = (id)=>{
    setColaborador(colaborador.map(item=>{
      if (item.id === id) {
        item.favorito = !item.favorito
      }
      return item
    }))
  }

  return (
    <div className="App">
      <Banner />
      {mostrarForm
        ?<Formulario 
          adicionarColaborador={adicionarColaboradorLista}
          time={infoTime.map(time => time.nomeTime)}
          aoSalvarNovoTime = {aoSalvarNovoTime}
        />
        :''
      }
      <MostrarFormulario 
        mostrarEsconderFormulario = {mostrarEsconderFormulario}
      />
      {infoTime.map(time => 
        <Time 
          key={time.nomeTime} 
          nome={time.nomeTime}
          id={time.id}
          corPrimariaTime={time.corPrimariaTime}
          corSegundaricaTime={time.corSegundaricaTime}
          colaboradores = {colaborador.filter(item => item.grupo === time.nomeTime)}
          aoDeletar = {aoDeletarColaborador}
          mudarCor = {mudarCorTime}
          aofavoritar = {aofavoritar}
        />
      )}
      <RodaPe />
    </div>
  );
}

export default App;
