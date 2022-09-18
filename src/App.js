//Comments
//Application Name: Photo Gallery App
//Author: Sonia Satam SE CSDS (2021-205) DJ Sanghvi College of Engineering 
//Date 18 September 2022

import React, { Component } from 'react';
import Search from "./components/search/Search";
import Title from './components/Title';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>

      <div className="App">
      <Title />
      </div>
      <div>
      <Search />
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;

