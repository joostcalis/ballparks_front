import React from 'react';
import BallParkList from './BallParkList'

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
      <h3> Simple list of Ballparks </h3>
        <BallParkList />
      </div>
    );
  }
}

export default App;
