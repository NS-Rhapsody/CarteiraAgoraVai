import { useState } from 'react'
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { PossuiCarteira } from './src/screens/PossuiCarteira';
import { Cadastro } from './src/screens/Cadastro';
import { Cadastro2 } from './src/screens/Cadastro2';
import { Numero } from './src/screens/Numero';


export default function App() {
  const states = [
    { id: 1, name: "inicio" },
    { id: 2, name: "login" },
    { id: 3, name: "possuiCarteira" },
    { id: 4, name: "cadastro" },
    { id: 5, name: "cadastro2" },
    { id: 6, name: "numero" },
  ]
  const [actualState, setActualState] = useState(states[0].name)
  

  const inicio = () => {
    setActualState(states[0].name);
  };

  const login = () => {
    setActualState(states[1].name);
  };

  const possuiCarteira = () => {
    setActualState(states[2].name);
  }

  const cadastro = () => {
    setActualState(states[3].name);
  }
  
  const cadastro2 = () => {
    setActualState(states[4].name);
  }

  const numero = () => {
    setActualState(states[5].name);
  }
  
 
    if (actualState === "inicio") {
      return <Home login={login} possuiCarteira={possuiCarteira}/>;
    } else if (actualState === "login") {
      return <Login inicio={inicio}/>
    } else if (actualState === "possuiCarteira") {
      return <PossuiCarteira inicio={inicio} cadastro={cadastro}/>
    } else if (actualState === "cadastro") {
      return <Cadastro inicio={inicio} cadastro2={cadastro2}/>
    } else if (actualState === "cadastro2") {
      return <Cadastro2 cadastro={cadastro} numero={numero}/>
    } else if (actualState === "numero") {
      return <Numero cadastro2={cadastro2}/>
    }

}