import React, { useState } from 'react'
import Home from './components/Home';
import Game from './components/Game'

function App() {

  const[StartGame,ONStartGame]=useState(true)

  const TooglePlay=()=>{
    ONStartGame((prev)=>!prev);
  }

  return (
    <>
    {
      StartGame?<Home toggle={TooglePlay}/>:<Game/>
    }
    
    </>
  )
}

export default App