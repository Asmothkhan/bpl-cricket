import { Flag, User } from 'lucide-react';
import { useState } from 'react';


const Players = ({player,setSelectedPlayer,setCoin,coin}) => {

    const[isSelected, setIsSelected]=useState(false)
    const playerData=player;

    
    const {country,name,condition,rating,price,image,battingType,bowlingType}=playerData;
     
    const handleSelectedPlayer=()=>{

        setCoin(coin-price)
        setSelectedPlayer(previous => [...previous, player]);
        setIsSelected(true)

    }
    
  return <div>

    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    
        
        <img
      src={image}
      alt="Shoes" />
      
  </figure>
  <div className=" mt-3 p-3">

    <div className='flex '>
        <User></User>
    <h2 className="card-title">{name}</h2>
    </div>
    <div className='flex justify-between items-center'>
       <div className='flex gap-1 text-gray-500'>
        <Flag></Flag>
        <h3>{country}</h3>
        </div> 
    <p>{condition}</p>
    </div>

    <div className='flex justify-between items-center'>
        <h2 className='font-bold'>Rating</h2>
        <p className='text-gray-500'>{rating}</p>
    </div>
    <div className='flex justify-between items-center'>
        <h2 className='font-bold'>{bowlingType}</h2>
        <p className='text-gray-500'>{battingType}</p>
    </div>
    <div className='flex justify-between items-center'>
        <h2 className='font-bold'>Price:{price}</h2>
        <button disabled={isSelected} onClick={handleSelectedPlayer}  className={`btn text-gray-800
        ${isSelected ? "bg-gray-500 text-gray-100":""}
           ${isSelected?"disabled:":""}`}>{isSelected ? "Selected":"Choose Selecte"}</button>
    </div>
   
  </div>
</div>
  </div>;
};

export default Players;