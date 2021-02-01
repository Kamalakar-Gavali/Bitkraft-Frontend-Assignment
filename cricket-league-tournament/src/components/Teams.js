const  Teams=(props)=>{

    return(
        <>
        <h1>Teams Info</h1>
        <table className="table-style">
            <thead>
                <th ></th>
                <th >Team</th>
                <th >Captian</th>
                <th >Country</th>
            </thead>
            <tbody>
        {
            props.data.map((country,index)=>country.teams.map((team)=>
            
              <tr  key={index}>
                   <td><img src={country.flagImg}/></td>
                    <td>{team.teamName}</td>
                    <td>{team.captain}</td>
                    <td>{country.name}</td>
                    </tr>))
        }
        </tbody>
        </table>
        </>

);
}
export default Teams;