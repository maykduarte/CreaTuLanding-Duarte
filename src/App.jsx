import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  
  const [valor, setValor] = useState(0)
  
  return (
    <>
    <NavBar valor={valor}/>
    <ItemListContainer mensaje="La vida es aquello que comienza despues de un buen café" fn={setValor}/>
    </>
  

  )
}

export default App
