import React, { Component } from 'react';
import Page from './Components/Page';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
    render(){
      return (
      <div className="App">
      <Page />
    </div>
    );
  }
}

export default App;
