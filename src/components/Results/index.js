import React from 'react';

function searchResults(props) {
    console.log(props.headers)
    return (
        // look up table order
        <table className="list-group search-results">
          <thead>
            <tr>
                    {props.headers.map(header => (
                    <th key={header.name}>{header.name}</th>
                    ))}
            </tr>
          </thead>
          <tbody>
            {props.users.map(result => (
                <tr key={result.email} className="list-group-item">
                    <td>
                        <img alt='employee' src={result.picture.medium} className='employee-img' />
                        <div src={result.name.first}>{result.name.first} {result.name.last}</div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default searchResults;
// filter method