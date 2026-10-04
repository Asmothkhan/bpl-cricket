import { Trash } from "lucide-react";
import { useState } from "react";


const Selected = ({selectedPlayer,setSelectedPlayer,coin,setCoin}) => {
    // const [selectedBtn, setSelectedBtn]=useState([]);
    const handleSelectedPlayer=(selected)=>{
       console.log(selected);
       const filterSelected=selectedPlayer.filter(selecteds=> selecteds.name !== selected.name);
       setSelectedPlayer(filterSelected)
       setCoin(coin + selected.price)

    }
    console.log(selectedPlayer);
  return (
    <>
    <div>
       {
        selectedPlayer.map(selected => (
            <div className="flex justify-between items-center border-2 mt-4 rounded-3xl p-4">
              <div className="flex ml-2 justify-center">
                  <img className="w-[100px] h-[100px]" src={selected.image} alt="" />
            <div className="ml-2 font-bold mt-4">
                <h3>{selected.name}</h3>
            <h5>{selected.battingType}</h5>
           
            </div>
              </div>
             <div>
                <button onClick={()=>handleSelectedPlayer(selected)} className="btn border-2 border-red-400 rounded-4xl"><Trash></Trash></button>
            </div>
            </div>
        ))
       }
       
    </div>
    </>
  )
  
};

export default Selected;