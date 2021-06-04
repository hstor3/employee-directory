import React from 'react';

function employeeSearch(props) {
    return (
        <form className='search'>
            <div className='form-group'>
                <label htmlFor='employee-name'>Employee Name:</label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name='employee'
                list='employees'
                type='text'
                className='form-control'
                placeholder="Search for an employee"
                id='employee'
                />
                {/* <datalist id='employees'>
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist> */}
                <button type='submit' onClick={props.handleFormSubmit} className='btn btn-success'>
                    Search
                </button>
            </div>
        </form>
    );
}

export default employeeSearch;