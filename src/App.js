import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import RodaPe from './componentes/RodaPe';

function App() {

  const infoTime=[
    { nomeTime:'Programação',
      corPrimariaTime:'#57C278',
      corSegundaricaTime:'#D9F7E9'
    },
    { nomeTime:'Front-End',
      corPrimariaTime:'#82CFFA',
      corSegundaricaTime:'#E8F8FF'
    },
    { nomeTime:'Data Science',
      corPrimariaTime:'#A6D157',
      corSegundaricaTime:'#F0F8E2'
    },
    { nomeTime:'Devops',
      corPrimariaTime:'#E06B69',
      corSegundaricaTime:'#FDE7E8'
    },
    { nomeTime:'UX e Design',
      corPrimariaTime:'#DB6EBF',
      corSegundaricaTime:'#FAE9F5'
    },
    { nomeTime:'Mobile',
      corPrimariaTime:'#FFBA05',
      corSegundaricaTime:'#FFF5D9'
    },
    { nomeTime:'Inovação e Gestão',
      corPrimariaTime:'#FF8A29',
      corSegundaricaTime:'#FFEEDF'
    },
  ]

  const [colaborador, setColaborador] = useState([])
  
  const adicionarColaboradorLista = (novoColaborador)=>{
    setColaborador([...colaborador, novoColaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
        adicionarColaborador={adicionarColaboradorLista}
        time={infoTime.map(time => time.nomeTime)}
      />
      {infoTime.map(time => 
        <Time 
          key={time.nomeTime} 
          nome={time.nomeTime}
          corPrimariaTime={time.corPrimariaTime}
          corSegundaricaTime={time.corSegundaricaTime}
          colaboradores = {colaborador.filter(item => item.grupo === time.nomeTime)}
        />
      )}
      <RodaPe />
    </div>
  );
}

export default App;
