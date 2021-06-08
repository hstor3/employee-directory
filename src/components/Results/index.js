import React from 'react';
import './index.css'
import moment from 'moment';

function searchResults(props) {
    console.log(props.headers)
    return (
        <table className="list-group search-results">
          <thead>
            {/* <tr>
                    {props.headers.map(header => (
                    <th key={header.name}>{header.name}</th>
                    ))}
            </tr> */}
          </thead>
          <tbody>
            {props.users.map(result => (
                <tr key={result.email} className="list-group-item">
                    <td>
                        <img alt='employee' src={result.picture.medium} className='employee-img' />
                        <div className='employee-name' src={result.name.first}>{result.name.first} {result.name.last}</div>
                        <div>{moment(result.dob.date).format('MMMM Do, YYYY')}</div>
                        <div src={result.email}>
                            <a href={'mailto:' + result.email}>{result.email}</a>
                        </div>
                        <div>
                            <a href={'tel:' + result.cell}>{result.cell}</a>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default searchResults;
// filter method