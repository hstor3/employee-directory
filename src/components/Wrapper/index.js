import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Data from '../Data';
import './index.css';

function Wrapper() {
    return (
    <main className='wrapper'>
        <Jumbotron>
            <h1>
                Employee Directory
            </h1>
        </Jumbotron>
        <Data />
    </main>
    )
}

export default Wrapper;