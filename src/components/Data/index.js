import React, { Component } from 'react';
import Results from '../Results';
import Search from '../Search';
import API from '../../utils/API'

class Data extends Component {
    state={
        users: [],
        searchTerm: ''
    }

    headers = [
        {name: 'image', width: '10px'},
        {name: 'name', width: '20px'},
        {name: 'email', width: '20px'},
        // {birthday phone}
    ]

    // handlesort funtion look at article

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({searchTerm: e.target.value})
        // filter over users here
    }

    componentDidMount() {
        API.getAPI().then(users => {
            console.log(users)
            this.setState({users: users.data.results}) 
        })
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}/>
                <Results users={this.state.users} headers={this.headers}/>
            </div>
        )
    }
}

export default Data;