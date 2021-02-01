const  Countries=(props)=>{

    return(
        <>
        <h1>Countries Info</h1>
        <table className="table-style">
          
        {
            props.data.map((country,index)=>
                <tr  key={index}>
                    <td><img src={country.flagImg}/></td>
                    <td>{country.name}</td>
                    <td><a href={country.link} target="_blank">More Info</a></td>
                </tr>
            )
        }
        </table>
        </>
);
}
export default Countries;