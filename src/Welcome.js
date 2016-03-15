import React from 'react';
import jQuery from 'jquery';

class Welcome extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="welcome cursor" onClick={this.props.continue}>
        <div className="welcome1">
          <h1 > Welcome to Ballparks! </h1>
          <p> Your home for the latest on every ballpark in the Major League </p>
          <p>Click anywhere to continue</p>
        </div>
      </div>
    );
  }
}

export default Welcome;
