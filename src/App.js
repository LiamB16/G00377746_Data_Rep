import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/DashBoard';
import React, { Component } from 'react';
import Add from './components/Add';
import Delete from './components/Delete';
import Edit from './components/Edit';

class App extends Component {
  render(){
  return (
    //NavBar adds the button options above the home page
    <div className="App">
      <img src="data:image/png;base64,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" class="center"></img>
        <NavBar />
          <div className="container">
            <DashBoard></DashBoard>
          </div>
          <form action="/components/Add">
          <button class="button1" varient="danger" align-centre>delete pokemon from pokedex</button>
          </form>
          <form action="/components/Delete">
          <button class="button2" varient="danger" align-centre>add pokemon to pokedex</button>
          </form>
          <form action="/components/Edit">
          <button class="button3" varient="danger" align-centre>edit pokemon from pokedex</button>
          </form>
    </div>
    
  );
  }
}

export default App;
