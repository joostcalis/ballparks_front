import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import './stylesheets/components.scss';
import Welcome from './Welcome';
import Dashboard from './Dashboard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      continue: false,
      shownews: true
    };
  }

  continueSwitch(){
    let continue1 = !this.state.continue;
    this.setState({
      continue: continue1
    })

  }

  render() {
    var navbar;
    if (this.state.continue){
      navbar = <Navbar />;
    }
    else {
      navbar = "";
    }

    var children;
    if (this.state.continue){
      children = this.props.children;
    }
    else {
      children = "";
    }

    var welcome;
    if (this.state.continue){
      welcome = "";
    }
    else {
      welcome = <Welcome continue={this.continueSwitch.bind(this)} />;
    }

    return (
      <div>
        <div>
        {welcome}
        </div>
        <div>
          {navbar}
          {children}
        </div>
      </div>
    );
  }
}

export default App;
