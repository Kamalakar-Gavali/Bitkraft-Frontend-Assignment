const  Scoretable=(props)=>{

    return(
        <>
        <h1>Tournament Score</h1>
        <table className="table-style">
            <thead>
                <th ></th>
                <th>Team</th>
                <th>Score</th>
                
            </thead>
            <tbody>
        {
            props.data.map((country,index)=>country.teams.map((team)=>
            
              <tr  key={index}>
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