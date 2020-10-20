import React, { Component } from 'react';
import classes from './App.scss';
import Persons from './../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'cwcww', name: "Max", age: 28 },
      { id: 'vwfwcfw', name: "Manu", age: 29 },
      { id: 'wdwdwd', name: "Stephanie", age: 26 }
    ]
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const person = persons.find(p => p.id === id);
    person.name = event.target.value;

    this.setState({ persons });
  }

  render() {
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div >
    );
  }
}

export default App;
