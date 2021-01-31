const  Countries=(props)=>{

    return(
        <>
        <h1>Countries Info</h1>
        <ul>
        {
            props.data.map((country,index)=>
                <li className='item-container' key={index}>
                    <img src={country.flagImg}/>
                    <span className='country-name'>{country.name}</span>
                    <span className='countr-desc'><a href={country.link} target="_blank">More Info</a></span>
                </li>
            )
        }
        </ul>
        </>
);
}
export default Countries;