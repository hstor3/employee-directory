import React, { Component } from 'react';
import Results from '../Results';
import Search from '../Search';
import API from '../../utils/API'

class Data extends Component {
  state = {
    users: [],
    searchTerm: "",
    sort: null,
  };

  results = [];

  // headers = [
  //     {name: 'image', width: '10px'},
  //     {name: 'name', width: '20px'},
  //     {name: 'email', width: '20px'},
  //     {name: 'birthday', width: '20px'},
  //     {name: 'phone', width: '20px'}
  //     // {birthday phone}
  // ]

  handleSort() {
    if (!this.state.sort) {
      return;
    }

    let usersList = this.state.users;
    usersList.sort(function (a, b) {
    //   if (this.state.sort === "first") {
        let x = a.name.first;
        let y = b.name.first;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
    //   }
    //   if (this.state.sort === "last") {
    //     let x = a.name.last;
    //     let y = b.name.last;
    //     if (x < y) {
    //       return -1;
    //     }
    //     if (x > y) {
    //       return 1;
    //     }
    //     return 0;
    //   }
    //   return 0;
    });
    this.setState({ users: usersList });

  };

  // handlesort funtion look at article
  handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredUsers = this.results.filter((user) =>
      user.name.first.toLowerCase().includes(this.state.searchTerm)
    );
    if (filteredUsers.length) {
      this.setState({ users: filteredUsers });
    } else {
      this.setState({ users: this.results });
    }
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  setSort = (e) => {
    this.setState({ sort: e.target.value },
        () => {
            this.handleSort();
        });
  };

  componentDidMount() {
    API.getAPI().then((users) => {
      this.results = users.data.results;
      this.setState({ users: users.data.results });
    });
  }

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          handleSort={this.setSort}
        />
        <Results users={this.state.users} />
      </div>
    );
  }
}

export default Data;