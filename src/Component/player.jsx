
import React, { use, useState } from 'react';
import Available from './Available';
import Selected from './Selected';


const Player = ({playerdata,setSelectedPlayer,selectedPlayer,coin,setCoin}) => {
    const players=use (playerdata)
    const [selectType, setSelectType]=useState(false)
    // console.log(selectedPlayer);
  return (
    <>
    <div className='flex justify-between items-center'>
        <div className='font-bold'>
            {
                selectType === false ?<h2>Available Player: ({players.length})</h2>:<h2>Selected Player: ({selectedPlayer.length}/{players.length})</h2>
            }
            
        
        </div>
       <div>
         <button onClick={()=>setSelectType(false)} className={`btn border-2 border-amber-200 border-r-0 rounded-l-2xl ${selectType === false ? "bg-amber-300":''}`}>Available</button>
        <button onClick={()=>setSelectType(true)} className={`btn border-2 border-amber-200 border-l-0 rounded-r-2xl ${selectType === true ? 'bg-amber-300':''}`}>Selected: ({selectedPlayer.length})</button>
       </div>
    </div>
    
    {
    selectType === false ? <Available players={players} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin}></Available> : <Selected selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}
    coin={coin} setCoin={setCoin}
    ></Selected>

    }
    
    
    </>
        
    
    
    
  )
};

export default Player;