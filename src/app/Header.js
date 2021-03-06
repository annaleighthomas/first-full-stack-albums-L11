import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>React App</h1>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/albums">Albums</NavLink>
          <NavLink to="/albums/add">Add Album</NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;