import React from 'react';
import { Link } from 'react-router';
import News from './News';

class Navbar extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <nav className="nav">
        <div className="cont">
          <div className="nav-header">
            <a className="nav-brand" href="#">Ballparks</a>
          </div>
          <ul className="nav1">
            <li className="act"><Link to="/">Home</Link></li>
          </ul>
          <ul className="nav-right">
            <News />
          </ul>
        </div>
      </nav>
    );
  }
}

  export default Navbar;
