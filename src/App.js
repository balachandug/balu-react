import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      {return monster.name.toLowerCase().includes(searchField.toLowerCase());}
    );
    return(<div className="App">
      <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
      <CardList monsters={filteredMonsters}> 
     
      </CardList>
    </div>)
  }

};

export default App;
