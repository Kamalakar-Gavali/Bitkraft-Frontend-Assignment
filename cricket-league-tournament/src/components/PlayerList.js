import {Switch,Link} from 'react-router-dom'
const PlayerList=(props)=>
{
    return(
    <>
    <h1>Players Info</h1>
    <table>
        <thead className='item-container'>
            <th ></th>
            <th>Name</th>
            <th>Team</th>
        
        </thead>
        <tbody>
    {
        props.data.map((country,index)=>country.teams.map((team)=>
            team.players.map((player)=>
          <>
          <tr className="item-container">
               <td><img src={country.flagImg}/></td>
               
               <td><Link to={`/players/profile`}>{player.name}</Link></td>
               
                <td>{team.teamName}</td>
                
                </tr>
                {/* /players/profile/${player.name} */}
            
           </> 
           
                )))
    }
    </tbody>
    </table>
    </>
    )
}
export default PlayerList;