import React from 'react';
import moment from 'moment';

// const dateFormat = {result.dob.date}toDateString();

function searchResults(props) {
    console.log(props.headers)
    // let bday = this.props.dob.date;
    // let cBday = (new Date(bday)).toString();
    // let bday = moment( this.result.dob.date)
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
                        <div src={result.email}>{result.email}</div>
                        <div>{moment(result.dob.date).format('MMMM Do, YYYY')}</div>
                        {/* <div>{bday}</div> */}
                        <div>{result.cell}</div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default searchResults;
// filter method