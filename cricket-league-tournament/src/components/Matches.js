import {MatchesData} from './MatchesData'
const  Matches=(props)=>{

    return(
        <>
        <h1>Match List</h1>
        <table className="table-style">
        <thead >
            <th>First Team</th>
            <th>Second Team</th>
            <th>Winner</th>
            <th>Looser</th>
            <th>Man of The Match</th>
            <th>Bowler of The Match</th>
            <th>Best Fielder</th>
        
        </thead>
        <tbody>
        {MatchesData.map((match,index)=>
            <tr key={index}>
                <td>{match.firstTeam}</td>
                <td>{match.secondTeam}</td>
                <td>{match.winner}</td>
                <td>{match.looser}</td>
                <td>{match.manOfTheMatch}</td>
                <td>{match.bowlerOfTheMatch}</td>
                <td>{match.bestFielder}</td>
            </tr>
        )}
        </tbody>
        
        </table>
        </>
);
}
export default Matches;