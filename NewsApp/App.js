
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={13}/>
      </div>
    )
  }
}


