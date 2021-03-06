import React from 'react';
import "./index.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// navbar and search input
function employeeSearch(props) {
    return (
        <Navbar className='nav' bg="light" expand="lg">
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
                        <button type='submit' onClick={props.handleFormSubmit} className='btn btn-success'>
                            Search
                        </button>
                    </div>
                </form>
                {/* <label>Sort by first name</label>
                <input type="radio" name="sort" value="first" onClick={props.handleSort} />
                <label>Sort Off</label>
                <input type="radio" name="sort" value="last" onClick={props.handleSort} /> */}
                <Nav className="mr-auto" activeKey='firstName'>
                        <NavDropdown className='dropdown-title' title="Sort By" id="basic-nav-dropdown">
                            <NavDropdown.Item  onSelect={props.handleSort} eventKey='firstName'>First Name</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.12">Last Name</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#action/3.2">DOB</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#action/3.3">Phone Number</NavDropdown.Item> */}
                        </NavDropdown>
                </Nav> 
            </Navbar.Collapse>
         </Navbar>

         
    );
}

export default employeeSearch;