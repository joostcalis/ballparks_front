import React from 'react';
import { Link } from 'react-router';
import News from './News';
import './stylesheets/components.scss';

class Navbar extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <nav className="nav navigation-main">
        <div className="container-f">
          <div className="nav-header">
          <Link className="nav-brand shadow" to="/">Ballparks</Link>
            <Link className="nav-brand shadow" to="/">Home</Link>
            </div>


        </div>
      </nav>
    );
  }
}

  export default Navbar;
