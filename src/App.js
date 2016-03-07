import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import './stylesheets/components.scss';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
      <Navbar />


      {this.props.children}
      </div>
    );
  }
}

export default App;
