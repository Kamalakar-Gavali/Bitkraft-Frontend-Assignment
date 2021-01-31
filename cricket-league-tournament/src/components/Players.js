import {Switch,Link,Route} from 'react-router-dom'
import Profile from './Profile'

import PlayerList from './PlayerList'
import { useState } from 'react'
const Players=(props)=>{
    
const [playerInfo,setPlayerInfo]=useState('')
    return(
        
                <Switch>
                   <Route exact path='/players/'>
                       {/* <PlayerList data={props.data}/> */}
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
            team.players.map((player,index)=>
          <>
          <tr className="item-container" key={index}>
               <td><img src={country.flagImg}/></td>
               
               <td><Link to={`/players/${player.name}`} onClick={()=>setPlayerInfo(player)}>{player.name}</Link></td>
               
                <td>{team.teamName}</td>
                
                </tr>
                
            
           </> 
           
                )))
    }
    </tbody>
    </table>
    </>
    
                       </Route> 
                <Route  exact path={`/players/:profile`} component={()=><Profile player={playerInfo}/>}/>
                   
               </Switch>        
    );
}
export default Players;