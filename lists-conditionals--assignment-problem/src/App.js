import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    text: ''
  }

  inputLengthHandler = (event) => {
    this.setState({ text: event.target.value });
  }

  deleteCharHandler = (index) => {
    const textArray = [...this.state.text];
    textArray.splice(index, 1);
    this.setState({ text: textArray.join('') });
  }

  render() {

    const chars = [...this.state.text].map((char, index) => {
      return <Char
        char={char}
        key={index}
        click={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          onChange={this.inputLengthHandler}
          value={this.state.text} />
        <Validation textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
