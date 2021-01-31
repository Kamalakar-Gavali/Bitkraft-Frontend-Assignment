const  Scoretable=(props)=>{

    return(
        <>
        <h1>Tournament Score</h1>
        <table>
            <thead className='item-container'>
                <th ></th>
                <th>Team</th>
                <th>Score</th>
                
            </thead>
            <tbody>
        {
            props.data.map((country,index)=>country.teams.map((team)=>
            
              <tr className="item-container" key={index}>
                   <td><img src={country.flagImg}/></td>
                    <td>{team.teamName}</td>
                    <td>{team.score}</td>
                    </tr>))
        }
        </tbody>
        </table>
        </>
);
}
export default Scoretable;