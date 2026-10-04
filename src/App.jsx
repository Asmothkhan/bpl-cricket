

import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Component/Navbar'
import Player from './Component/player';


const playerPromise=async()=>{
  const res=await fetch('/players.json');
  return res.json()
}

function App() {

  const [coin, setCoin]=useState(50000000)


  const playerdata=playerPromise()
  const [selectedPlayer, setSelectedPlayer]=useState([])
  // console.log(selectedPlayer, "click me");



  return (
    <>
   
      <Navbar coin={coin}></Navbar>
     <Suspense fallback={<h1>Loading Data........</h1>}>
       <Player playerdata={playerdata} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}
       coin={coin} setCoin={setCoin}
       ></Player>
     </Suspense>
     
    </>
  )
}

export default App
