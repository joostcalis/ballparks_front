import React from 'react';
import { Link } from 'react-router';
import News from './News';
import './stylesheets/components.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Navbar extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
      <nav className="nav navigation-main">
        <div className="container-f">
          <div className="nav-header">
            <Link className="nav-brand shadow" to="/">Ballparks</Link>
            </div>
          <li className="newsholder">
            <News />
          </li>



        </div>
      </nav>
      </ReactCSSTransitionGroup>
    );
  }
}

  export default Navbar;
