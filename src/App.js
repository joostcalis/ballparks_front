import React from 'react';
import BallparkList from './BallparkList'

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <section>
      <h3> Simple list of Ballparks </h3>
        <BallparkList />
      </section>
    );
  }
}

export default App;
