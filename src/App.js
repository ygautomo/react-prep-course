import React, { Component } from 'react';
import Personal from './Personal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To start, please edit the appropriate file so the the below "Personal" (<strong>check the source code!</strong>) 
          component will display your biodata, including your name, email and occupation ('refactory student')
        </p> 
        {/* Edit here */}
        <Personal>
        </Personal>
        {/* Don't edit anything below this line */}
      </div>
    );
  }
}

export default App;
