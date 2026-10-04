
import Players from './Players';

const Available = ({players,setSelectedPlayer,setCoin,coin}) => {


    // console.log(players);
  return (
    <div className=' mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            players.map(player => (
            <Players player={player} setSelectedPlayer={setSelectedPlayer}
            setCoin={setCoin} coin={coin}></Players>
            // console.log(player);
            ))
        }
    </div>
  )
};

export default Available;