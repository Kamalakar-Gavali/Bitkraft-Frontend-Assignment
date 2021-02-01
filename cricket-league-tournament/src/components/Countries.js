const Countries = (props) => {
  return (
    <>
      <h1>Countries Info</h1>
      <table className="table-style">
        <thead>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((country, index) => (
            <tr key={index}>
              <td>
                <img src={country.flagImg} />
              </td>
              <td>{country.name}</td>
              <td>
                <a href={country.link} target="_blank">
                  More Info
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Countries;
