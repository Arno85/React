import React, { Component } from 'react';
import classes from './App.scss';
import Person from './Person/Person';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.nameChangedHandler(event, p.id)} />;
          })}
        </div>
      );

      btnClass = classes.red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.redText);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.boldText);
    }

    return (
      <div className={classes.App}>
        <h1>Persons</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div >
    );
  }
}

export default App;
