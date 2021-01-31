const  Teams=(props)=>{

    return(
        <>
        <h1>Teams Info</h1>
        <table>
            <thead className='item-container'>
                <th ></th>
                <th >Team</th>
                <th >Captian</th>
                <th >Country</th>
            </thead>
            <tbody>
        {
            props.data.map((country,index)=>country.teams.map((team)=>
            
              <tr className="item-container" key={index}>
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