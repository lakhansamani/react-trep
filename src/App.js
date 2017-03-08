import React, { Component } from 'react';
import './App.css';

class App extends Component {
  onButtonClick () {
    alert('button clicked');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onButtonClick.bind(this)}>Chart Btn</button>
      </div>
    );
  }
}

export default App;
