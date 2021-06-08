import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function employeeSearch(props) {
    return (
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

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
                <label>Sort On</label>
                <input type="radio" name="sort" value="first" onClick={props.handleSort} />
                <label>Sort Off</label>
                <input type="radio" name="sort" value="last" onClick={props.handleSort} />
                {/* <Nav className="mr-auto">
                        <NavDropdown title="Sort By" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={props.handleSort('name.first')}>First Name</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.12">Last Name</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">DOB</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Phone Number</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                </Nav> */}
            </Navbar.Collapse>
         </Navbar>
    );
}

export default employeeSearch;