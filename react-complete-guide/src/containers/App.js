import React, { Component } from 'react';
import classes from './App.scss';
import Persons from './../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(`[App.js] constructor
    Do : Initialize state (this.state = ...)
    Don't : Side effect (Http requests, ...)`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] Lifecycle hook - getDerivedStateFromProps
    Do : Sync state to props
    Don't : Side effect (Http requests, ...)`);
    return state;
  }

  state = {
    persons: [
      { id: 'cwcww', name: "Max", age: 28 },
      { id: 'vwfwcfw', name: "Manu", age: 29 },
      { id: 'wdwdwd', name: "Stephanie", age: 26 }
    ],
    showPersons: false,
    authenticated: false
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log(`[App.js] Lifecycle hook - render
    Do : Render HTML
    Don't : Initialize or update state`);

    return (
      <Aux>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler} />
          <Persons
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </AuthContext.Provider>
      </Aux >
    );
  }

  componentDidMount() {
    console.log(`[App.js] Lifecycle hook - componentDidMount
    Do : Side effect (Http requests, ...)
    Don't : Update state`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`[App.js] Lifecycle hook - shouldComponentUpdate
    Do : Decide to update state or not
    Don't : Side effect (Http requests, ...)`);
    console.log(this.state, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`[App.js] Lifecycle hook - getShnapshotBeforeUpdate
    Do : Last Minute DOM operations
    Don't : Side effect (Http requests, ...)`);
    console.log(this.state, prevState);
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`[App.js] Lifecycle hook - componentDidUpdate
    Do : Side effect (Http requests, ...)
    Don't : Update state`);
    console.log(snapshot);
  }
}

export default withClass(App, classes.App);
