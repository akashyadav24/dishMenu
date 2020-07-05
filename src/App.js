import React, {Component} from 'react'
import logo from './logo.svg';
import { Navbar, NavbarBrand, Media} from 'reactstrap';
import './App.css';
import Menu from "./components/menucomponent";

class App extends Component {
  render() {
  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Menu</NavbarBrand>
      </div>
    </Navbar>
    <Menu />
    </div>    
       );

  }
}

export default App;
