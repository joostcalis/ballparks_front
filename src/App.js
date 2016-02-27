import React from 'react';
import BallparkList from './BallparkList'

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
      <h3> Simple list of Ballparks </h3>
        <BallparkList />
      </div>
    );
  }
}

export default App;
