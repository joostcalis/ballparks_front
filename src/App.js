import React from 'react';
import { Link } from 'react-router';
import './stylesheets/components.scss';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
      <nav className="nav">
        <div className="cont">
          <div className="nav-header">
            <a className="nav-brand" href="#">Ballparks</a>
          </div>
          <ul className="nav1">
            <li className="act"><Link to="/">Home</Link></li>
          </ul>
        </div>
      </nav>

      {this.props.children}
      </div>
    );
  }
}

export default App;
