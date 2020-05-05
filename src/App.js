import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components'
import { SearchBox } from './components/search-box/search-box.components'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChanges= e =>{
    this.setState({searchField : e.target.value});
  };

  render(){
    const {monsters , searchField} = this.state
    const filteredMonster = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
      placeholder= 'search monster'
      handleChanges = {this.handleChanges}
      />
      <CardList monsters = {filteredMonster}/>
    </div>
  );
  }
}

export default App;
