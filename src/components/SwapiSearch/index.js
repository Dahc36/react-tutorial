import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from 'components/ToDo/Form';
import SearchList from 'components/ToDo/List';

class SwapiSearch extends Component {
  state = {
    list: [],
    searchValue: 'none',
  }

  getAllData = async function(searchParam) {
    const characterArray = [];
    let url = `https://swapi.co/api/people/?search=${searchParam}`;
    let response = await axios.get(url);
    let data = response.data;
    data.results.forEach(result => characterArray.push(result.name));
    while (data.next) {
      url = data.next;
      response = await axios.get(url);
      data = response.data;
      data.results.forEach(result => characterArray.push(result.name));
    }
    return characterArray;
  }

  handleSubmit = searchParam => {
    this.setState(_ => ({
      list: [],
      loading: true,
      searchValue: searchParam,
    }));
    this.getAllData(searchParam)
      .then(response => this.setState(_ => ({
        list: response,
        loading: false,
      })))
      .catch(error => console.log(error));
  }

  render() {
    const {
      list,
      loading,
      searchValue,
    } = this.state;

    return (
      <div>
        <h2>Swapi Search</h2>
        <SearchForm
          disabled={loading}
          label="Search"
          onSubmit={this.handleSubmit}
        />
        <p>Search value: {searchValue}</p>
        <SearchList
          list={list}
        />
      </div>
    );
  }
};

export default SwapiSearch;
