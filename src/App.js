import React, {Component} from 'react'
import logo from './logo.svg';
import { Navbar, NavbarBrand, Media} from 'reactstrap';
import './App.css';
import Menu from "./components/menucomponent";
import {DISHES} from './shared/dishes'

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      dishes: DISHES
    }
  }


  render() {
  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Menu</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes} />
    </div>    
       );

  }
}

export default App;
