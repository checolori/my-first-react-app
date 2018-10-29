import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">

        <main>
        <Title content="CIAOOOOOO" />
        <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;
